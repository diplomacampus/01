// Centralized Admin Data & CRUD Manager (assets/js/admin-manager.js)
// Enables full Add, Edit, Delete capabilities across all app collections with Firebase & Local synchronization.

(function() {
    class AdminDataManager {
        constructor() {
            this.collections = ['resources', 'colleges', 'pyqs', 'exams', 'mockTests', 'qna', 'announcements'];
            this.cache = {};
            this.listeners = [];
            this.isInitialized = false;
            this.init();
        }

        async init() {
            // Load defaults from window.DC_DATA if available
            const baseData = window.DC_DATA || {};
            
            this.collections.forEach(col => {
                let localSaved = null;
                try {
                    const stored = localStorage.getItem(`dc_data_${col}`);
                    if (stored) localSaved = JSON.parse(stored);
                } catch(e) {
                    console.warn(`Failed reading localStorage for ${col}:`, e);
                }

                if (localSaved && Array.isArray(localSaved) && localSaved.length > 0) {
                    this.cache[col] = localSaved;
                } else if (baseData[col] && Array.isArray(baseData[col])) {
                    this.cache[col] = JSON.parse(JSON.stringify(baseData[col]));
                } else if (col === 'resources' && baseData.studyMaterials && Array.isArray(baseData.studyMaterials)) {
                    this.cache[col] = JSON.parse(JSON.stringify(baseData.studyMaterials));
                } else if (col === 'pyqs' && baseData.questionPapers && Array.isArray(baseData.questionPapers)) {
                    this.cache[col] = JSON.parse(JSON.stringify(baseData.questionPapers));
                } else {
                    this.cache[col] = [];
                }
            });

            // Ensure announcements has a default structure
            if (!this.cache.announcements || this.cache.announcements.length === 0) {
                this.cache.announcements = [
                    {
                        id: 'ann-1',
                        badge: 'BIT Sindri D2D 2026',
                        badgeColor: 'text-amber-300',
                        text: 'Lateral Entry Eligibility & Seat Matrix Updated',
                        link: 'd2d.html',
                        active: true,
                        updatedAt: Date.now()
                    },
                    {
                        id: 'ann-2',
                        badge: 'JCECEB PECE 2026',
                        badgeColor: 'text-emerald-300',
                        text: 'Polytechnic Entrance Routine & Mock Test Series Live',
                        link: 'exam-detail.html?id=jharkhand-polytechnic',
                        active: true,
                        updatedAt: Date.now()
                    },
                    {
                        id: 'ann-3',
                        badge: 'JUT Ranchi',
                        badgeColor: 'text-sky-300',
                        text: 'Check 75% Attendance Requirement & Admit Card Status',
                        link: 'tools.html#attendance-calc',
                        active: true,
                        updatedAt: Date.now()
                    },
                    {
                        id: 'ann-4',
                        badge: 'Semester Notes',
                        badgeColor: 'text-purple-300',
                        text: '56+ Curated PYQs and handwritten notes ready for download',
                        link: 'resources.html',
                        active: true,
                        updatedAt: Date.now()
                    }
                ];
            }

            // Also provide direct window aliases for backward-compatibility
            window.DC_COLLEGES = this.cache.colleges;
            window.DC_RESOURCES = this.cache.resources;
            window.DC_PYQS = this.cache.pyqs;
            window.DC_EXAMS = this.cache.exams;
            window.DC_MOCK_TESTS = this.cache.mockTests;
            window.DC_ANNOUNCEMENTS = this.cache.announcements;

            this.isInitialized = true;
            this.attachFirebaseListeners();
            this.broadcast('init', null, null);
        }

        attachFirebaseListeners() {
            // Check if Firebase is ready or wait for it
            const checkAndAttach = () => {
                const fb = window.DC_FIREBASE;
                if (!fb || !fb.db || !fb.ref || !fb.onValue) {
                    setTimeout(checkAndAttach, 500);
                    return;
                }

                this.collections.forEach(col => {
                    try {
                        const colRef = fb.ref(fb.db, col);
                        fb.onValue(colRef, (snapshot) => {
                            const val = snapshot.val();
                            if (val) {
                                let list = [];
                                if (Array.isArray(val)) {
                                    list = val.filter(Boolean);
                                } else if (typeof val === 'object') {
                                    list = Object.keys(val).map(key => ({
                                        id: key,
                                        ...(typeof val[key] === 'object' ? val[key] : { value: val[key] })
                                    }));
                                }

                                if (list.length > 0) {
                                    // Merge or replace Firebase data
                                    this.cache[col] = list;
                                    try {
                                        localStorage.setItem(`dc_data_${col}`, JSON.stringify(list));
                                    } catch(e){}
                                    this.syncAliases();
                                    this.broadcast('sync', col, list);
                                }
                            }
                        }, (error) => {
                            console.warn(`Firebase listener on ${col} notice:`, error?.message);
                        });
                    } catch (err) {
                        console.warn(`Error setting listener on ${col}:`, err);
                    }
                });
            };

            checkAndAttach();
        }

        syncAliases() {
            window.DC_COLLEGES = this.cache.colleges;
            window.DC_RESOURCES = this.cache.resources;
            window.DC_PYQS = this.cache.pyqs;
            window.DC_EXAMS = this.cache.exams;
            window.DC_MOCK_TESTS = this.cache.mockTests;
            window.DC_ANNOUNCEMENTS = this.cache.announcements;
        }

        saveToLocalStorage(col) {
            try {
                localStorage.setItem(`dc_data_${col}`, JSON.stringify(this.cache[col]));
            } catch(e) {
                console.warn(`Failed writing localStorage for ${col}:`, e);
            }
        }

        broadcast(action, col, item) {
            const event = new CustomEvent('dc-data-updated', {
                detail: { action, collection: col, item, allData: this.cache }
            });
            window.dispatchEvent(event);
        }

        // Generic Getters
        getAll(col) {
            return this.cache[col] ? [...this.cache[col]] : [];
        }

        getById(col, id) {
            if (!this.cache[col]) return null;
            return this.cache[col].find(item => String(item.id) === String(id) || String(item.slug) === String(id)) || null;
        }

        // Generic Add / Create
        async add(col, item) {
            if (!this.cache[col]) this.cache[col] = [];
            
            const id = item.id || `${col.slice(0, 3)}-${Date.now()}-${Math.floor(Math.random()*1000)}`;
            const newItem = {
                ...item,
                id,
                createdAt: item.createdAt || Date.now(),
                updatedAt: Date.now()
            };

            // Prepend to local cache
            this.cache[col].unshift(newItem);
            this.saveToLocalStorage(col);
            this.syncAliases();
            this.broadcast('add', col, newItem);

            // Sync to Firebase if available
            try {
                const fb = window.DC_FIREBASE;
                if (fb && fb.db && fb.ref && fb.set) {
                    const itemRef = fb.ref(fb.db, `${col}/${id}`);
                    await fb.set(itemRef, newItem);
                }
            } catch(err) {
                console.warn(`Firebase set on ${col}/${id} notice:`, err?.message);
            }

            return newItem;
        }

        // Generic Update / Edit
        async update(col, id, updatedFields) {
            if (!this.cache[col]) return null;
            const index = this.cache[col].findIndex(item => String(item.id) === String(id) || String(item.slug) === String(id));
            
            if (index === -1) {
                // If not found, add as new
                return this.add(col, { ...updatedFields, id });
            }

            const existing = this.cache[col][index];
            const updatedItem = {
                ...existing,
                ...updatedFields,
                id: existing.id || id,
                updatedAt: Date.now()
            };

            this.cache[col][index] = updatedItem;
            this.saveToLocalStorage(col);
            this.syncAliases();
            this.broadcast('update', col, updatedItem);

            // Sync to Firebase
            try {
                const fb = window.DC_FIREBASE;
                if (fb && fb.db && fb.ref && fb.update) {
                    const itemRef = fb.ref(fb.db, `${col}/${updatedItem.id}`);
                    await fb.update(itemRef, updatedItem);
                }
            } catch(err) {
                console.warn(`Firebase update on ${col}/${id} notice:`, err?.message);
            }

            return updatedItem;
        }

        // Generic Delete / Remove
        async delete(col, id) {
            if (!this.cache[col]) return false;
            const prevLength = this.cache[col].length;
            const deletedItem = this.cache[col].find(item => String(item.id) === String(id) || String(item.slug) === String(id));
            
            this.cache[col] = this.cache[col].filter(item => String(item.id) !== String(id) && String(item.slug) !== String(id));
            
            if (this.cache[col].length !== prevLength) {
                this.saveToLocalStorage(col);
                this.syncAliases();
                this.broadcast('delete', col, deletedItem || { id });

                // Sync to Firebase
                try {
                    const fb = window.DC_FIREBASE;
                    if (fb && fb.db && fb.ref && fb.remove) {
                        const itemRef = fb.ref(fb.db, `${col}/${id}`);
                        await fb.remove(itemRef);
                    }
                } catch(err) {
                    console.warn(`Firebase remove on ${col}/${id} notice:`, err?.message);
                }

                return true;
            }
            return false;
        }

        // Reset to initial static template data
        resetToDefaults(col) {
            const baseData = window.DC_DATA || {};
            if (col && baseData[col]) {
                this.cache[col] = JSON.parse(JSON.stringify(baseData[col]));
                this.saveToLocalStorage(col);
            } else if (!col) {
                this.collections.forEach(c => {
                    if (baseData[c]) {
                        this.cache[c] = JSON.parse(JSON.stringify(baseData[c]));
                        this.saveToLocalStorage(c);
                    }
                });
            }
            this.syncAliases();
            this.broadcast('reset', col, null);
        }
    }

    // Instantiate and bind
    window.DC_DATA_MANAGER = new AdminDataManager();

    // Check URL param or localStorage override for testing
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
        localStorage.setItem('dc_admin_override', 'true');
        if (window.DC_AUTH) window.DC_AUTH.isAdmin = true;
    } else if (urlParams.get('admin') === 'false') {
        localStorage.removeItem('dc_admin_override');
        if (window.DC_AUTH) window.DC_AUTH.isAdmin = false;
    }
})();
