        // --- HOMEPAGE NAVIGATION ---
        function showProgrammeSelector() {
            document.getElementById('homepage-screen').style.display = 'none';
            document.getElementById('welcome-screen').style.display = 'flex';
        }

        function showHomepage() {
            document.getElementById('welcome-screen').style.display = 'none';
            document.getElementById('homepage-screen').style.display = 'block';
        }

        // --- DYNAMIC THEME SELECTOR ---

        const colorThemes = {
            "analytics": {
                "--primary-color": "#248BB4",
                "--primary-dark": "#1a495d",
                "--primary-light": "#D5EBF3",
                "--primary-accent": "#3494ba",
                "--primary-deep": "#216A87",
                "--banner-text": "#d4eaf3"
            },
            "hhm": {
                "--primary-color": "#AB79C7",
                "--primary-dark": "#AB79C7",
                "--primary-light": "#DFCEE8",
                "--primary-accent": "#AB79C7",
                "--primary-deep": "#AB79C7",
                "--banner-text": "#eed5e2"
            },
            "pharma": {
                "--primary-color": "#CC9901",
                "--primary-dark": "#CC9901",
                "--primary-light": "#FEFFCC",
                "--primary-accent": "#CC9901",
                "--primary-deep": "#CC9901",
                "--banner-text": "#eed5e2"
            },
            "dev": {
                "--primary-color": "#d2691e",
                "--primary-dark": "#8b4513",
                "--primary-light": "#faebd7",
                "--primary-accent": "#cd853f",
                "--primary-deep": "#a0522d",
                "--banner-text": "#f5e1cd"
            },
            "mph": {
                "--primary-color": "#008080",
                "--primary-dark": "#004d4d",
                "--primary-light": "#e6f2f2",
                "--primary-accent": "#20b2aa",
                "--primary-deep": "#006666",
                "--banner-text": "#d9ebeb"
            }
        };

        const programmeTitles = {
            "analytics": "SCHOOL OF DIGITAL HEALTH",
            "hhm": "INSTITUTE OF HEALTH MANAGEMENT RESEARCH",
            "pharma": "SCHOOL OF PHARMACEUTICAL MANAGEMENT",
            "dev": "SCHOOL OF DEVELOPMENT STUDIES",
            "mph": "MASTER OF PUBLIC HEALTH"
        };

        // Global variable to hold the chosen text
        let selectedProgrammeText = "SCHOOL OF DIGITAL HEALTH";

        function selectProgramme(themeKey) {
            const selectedTheme = colorThemes[themeKey];
            const root = document.documentElement;

            for (const [property, value] of Object.entries(selectedTheme)) {
                root.style.setProperty(property, value);
            }

            // Save the selected programme text
            selectedProgrammeText = programmeTitles[themeKey];

            if (themeKey === 'analytics') {
                document.getElementById('ExtraLinkLabel').innerText = "GitHub Link";
            } else {
                document.getElementById('ExtraLinkLabel').innerText = "Publications / Thesis Link";
            }

            // Hide the welcome screen and show the app
            document.getElementById('welcome-screen').style.display = 'none';
            document.getElementById('form-view').style.display = 'block';
        }


        let customProfilePic = "https://via.placeholder.com/150";

        function goBackToWelcome() {
            document.getElementById('form-view').style.display = 'none';
            document.getElementById('welcome-screen').style.display = 'flex';
        }

        function addTechSkill(name = "", detail = "") {
            const container = document.getElementById('tech-skills-container');
            const div = document.createElement('div'); div.className = 'dynamic-item tech-item';
            let det = detail.toLowerCase();
            let opt1 = det==='' ? 'selected' : '';
            let opt2 = (det==='beginner' || det==='basic') ? 'selected' : '';
            let opt3 = (det==='competent' || det==='intermediate') ? 'selected' : '';
            let opt4 = (det==='proficient' || det==='advance' || det==='advanced' || det==='dashboard') ? 'selected' : '';
            let opt5 = det==='expert' ? 'selected' : '';
            div.innerHTML = '<button type="button" class="remove-btn" onclick="this.parentElement.remove()">X</button>' +
                '<input type="text" class="t-name" placeholder="Skill (e.g. Python)" value="' + name + '" style="margin-bottom:5px;">' +
                '<select class="t-detail">' +
                '<option value="" ' + opt1 + '>Select Level (Optional)</option>' +
                '<option value="Beginner" ' + opt2 + '>Beginner</option>' +
                '<option value="Competent" ' + opt3 + '>Competent</option>' +
                '<option value="Proficient" ' + opt4 + '>Proficient</option>' +
                '<option value="Expert" ' + opt5 + '>Expert</option>' +
                '</select>';
            container.appendChild(div);
        }
        function addInterSkill(name = "", detail = "") {
            const container = document.getElementById('inter-skills-container');
            const div = document.createElement('div'); div.className = 'dynamic-item int-item';
            let det = detail.toLowerCase();
            let opt1 = det==='' ? 'selected' : '';
            let opt2 = (det==='beginner' || det==='basic') ? 'selected' : '';
            let opt3 = (det==='competent' || det==='intermediate') ? 'selected' : '';
            let opt4 = (det==='proficient' || det==='advance' || det==='advanced') ? 'selected' : '';
            let opt5 = det==='expert' ? 'selected' : '';
            div.innerHTML = '<button type="button" class="remove-btn" onclick="this.parentElement.remove()">X</button>' +
                '<input type="text" class="i-name" placeholder="Skill" value="' + name + '" style="margin-bottom:5px;">' +
                '<select class="i-detail">' +
                '<option value="" ' + opt1 + '>Select Level (Optional)</option>' +
                '<option value="Beginner" ' + opt2 + '>Beginner</option>' +
                '<option value="Competent" ' + opt3 + '>Competent</option>' +
                '<option value="Proficient" ' + opt4 + '>Proficient</option>' +
                '<option value="Expert" ' + opt5 + '>Expert</option>' +
                '</select>';
            container.appendChild(div);
        }
        function addStrength(name = "") {
            const container = document.getElementById('strengths-container');
            const div = document.createElement('div'); div.className = 'dynamic-item str-item';
            div.innerHTML = '<button type="button" class="remove-btn" onclick="this.parentElement.remove()">X</button>' +
                '<input type="text" class="st-name" placeholder="Strength" value="' + name + '">';
            container.appendChild(div);
        }
        function addCert(name = "", detail = "") {
            const container = document.getElementById('certs-container');
            const div = document.createElement('div'); div.className = 'dynamic-item cert-item';
            div.innerHTML = '<button type="button" class="remove-btn" onclick="this.parentElement.remove()">X</button>' +
                '<input type="text" class="c-name" placeholder="Certificate Name" value="' + name + '" style="margin-bottom:5px;">' +
                '<input type="text" class="c-detail" placeholder="Issuer/Detail" value="' + detail + '">';
            container.appendChild(div);
        }
        function addAchievement(detail = "") {
            const container = document.getElementById('achievements-container');
            const div = document.createElement('div'); div.className = 'dynamic-item ach-item';
            div.innerHTML = '<button type="button" class="remove-btn" onclick="this.parentElement.remove()">X</button>' +
                '<input type="text" class="a-detail" placeholder="Achievement Detail" value="' + detail + '">';
            container.appendChild(div);
        }
        function addProject(name = "") {
            const container = document.getElementById('projects-container');
            const div = document.createElement('div'); div.className = 'dynamic-item proj-item';
            div.innerHTML = '<button type="button" class="remove-btn" onclick="this.parentElement.remove()">X</button>' +
                '<input type="text" class="p-name" placeholder="Project Name" value="' + name + '">';
            container.appendChild(div);
        }
        function addExperience(start = "", end = "", title = "", company = "", loc = "", resp = "") {
            const container = document.getElementById('experience-container');
            const div = document.createElement('div'); div.className = 'dynamic-item exp-item';
            const uniqueId = 'editor-exp-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
            div.innerHTML = '<button type="button" class="remove-btn" onclick="this.parentElement.remove()">X</button>' +
                '<div style="display:flex; gap: 10px;">' +
                '<div style="flex:1;"><small>Start Date</small><input type="date" class="e-start" required value="' + start + '" onchange="this.parentElement.nextElementSibling.querySelector(\'.e-end\').min = this.value"></div>' +
                '<div style="flex:1;"><small>End Date</small><input type="date" class="e-end" required value="' + end + '"></div>' +
                '</div>' +
                '<div style="display:flex; gap: 10px; margin-top:10px;">' +
                '<div style="flex:1;"><input type="text" class="e-title" placeholder="Job Title" value="' + title + '"></div>' +
                '<div style="flex:1;"><input type="text" class="e-company" placeholder="Company" value="' + company + '"></div>' +
                '<div style="flex:1;"><input type="text" class="e-loc" placeholder="Location" value="' + loc + '"></div>' +
                '</div>' +
                '<div style="margin-top:10px;">' +
                '<div id="' + uniqueId + '" style="height: 120px; background:#fff;">' + resp + '</div>' +
                '<input type="hidden" class="e-resp" value="">' +
                '</div>';
            container.appendChild(div);
            
            const quill = new Quill('#' + uniqueId, {
                theme: 'snow',
                modules: { toolbar: [ ['bold', 'italic', 'underline'], [{ 'list': 'ordered'}, { 'list': 'bullet' }] ] }
            });
            quill.on('text-change', function() {
                div.querySelector('.e-resp').value = quill.root.innerHTML;
            });
            div.querySelector('.e-resp').value = quill.root.innerHTML;
        }

        function addInternship(start = "", end = "", title = "", company = "", loc = "", resp = "") {
            const container = document.getElementById('internship-container');
            const div = document.createElement('div'); div.className = 'dynamic-item intn-item';
            const uniqueId = 'editor-intn-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
            div.innerHTML = '<button type="button" class="remove-btn" onclick="this.parentElement.remove()">X</button>' +
                '<div style="display:flex; gap: 10px;">' +
                '<div style="flex:1;"><small>Start Date</small><input type="date" class="in-start" required value="' + start + '" onchange="this.parentElement.nextElementSibling.querySelector(\'.in-end\').min = this.value"></div>' +
                '<div style="flex:1;"><small>End Date</small><input type="date" class="in-end" required value="' + end + '"></div>' +
                '</div>' +
                '<div style="display:flex; gap: 10px; margin-top:10px;">' +
                '<div style="flex:1;"><input type="text" class="in-title" placeholder="Intern Title" value="' + title + '"></div>' +
                '<div style="flex:1;"><input type="text" class="in-company" placeholder="Company" value="' + company + '"></div>' +
                '<div style="flex:1;"><input type="text" class="in-loc" placeholder="Location" value="' + loc + '"></div>' +
                '</div>' +
                '<div style="margin-top:10px;">' +
                '<div id="' + uniqueId + '" style="height: 120px; background:#fff;">' + resp + '</div>' +
                '<input type="hidden" class="in-resp" value="">' +
                '</div>';
            container.appendChild(div);

            const quill = new Quill('#' + uniqueId, {
                theme: 'snow',
                modules: { toolbar: [ ['bold', 'italic', 'underline'], [{ 'list': 'ordered'}, { 'list': 'bullet' }] ] }
            });
            quill.on('text-change', function() {
                div.querySelector('.in-resp').value = quill.root.innerHTML;
            });
            div.querySelector('.in-resp').value = quill.root.innerHTML;
        }

        function addEducation(level = "", deg = "", inst = "", yr = "", pct = "") {
            const container = document.getElementById('education-container');
            const div = document.createElement('div'); div.className = 'dynamic-item edu-item';
            div.innerHTML = '<button type="button" class="remove-btn" onclick="this.parentElement.remove()">X</button>' +
                '<div style="display:flex; gap: 10px;">' +
                '<div style="flex:1;"><input type="text" class="ed-lvl" placeholder="Level (e.g. PG)" value="' + level + '"></div>' +
                '<div style="flex:2;"><input type="text" class="ed-deg" placeholder="Degree/Board" value="' + deg + '"></div>' +
                '</div>' +
                '<div style="display:flex; gap: 10px; margin-top:10px;">' +
                '<div style="flex:2;"><input type="text" class="ed-inst" placeholder="Institution" value="' + inst + '"></div>' +
                '<div style="flex:1;"><input type="text" class="ed-yr" placeholder="Year" value="' + yr + '"></div>' +
                '<div style="flex:1;"><input type="text" class="ed-pct" placeholder="Score %" value="' + pct + '"></div>' +
                '</div>';
            container.appendChild(div);
        }


        // ── IMAGE CROP MODAL ──────────────────────────────────────────────
        (function() {
            // Inject crop modal HTML
            const modalHTML = `
            <div id="crop-modal" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.75); z-index:9999; align-items:center; justify-content:center;">
                <div style="background:#fff; border-radius:12px; padding:24px; max-width:520px; width:95%; box-shadow:0 8px 40px rgba(0,0,0,0.4);">
                    <h3 style="margin:0 0 12px; font-size:1.1rem; color:#333;">Crop Profile Picture</h3>
                    <p style="margin:0 0 12px; font-size:0.82rem; color:#666;">Drag to reposition &bull; Scroll or pinch to zoom</p>
                    <div id="crop-viewport" style="position:relative; width:100%; height:320px; overflow:hidden; background:#111; border-radius:8px; cursor:grab; touch-action:none;">
                        <img id="crop-img" style="position:absolute; transform-origin:top left; user-select:none; pointer-events:none;" draggable="false">
                        <!-- square overlay -->
                        <div style="position:absolute;inset:0;pointer-events:none;">
                            <svg width="100%" height="100%">
                                <defs>
                                    <mask id="hole">
                                        <rect width="100%" height="100%" fill="white"/>
                                        <rect id="crop-square" x="calc(50% - 120px)" y="calc(50% - 120px)" width="240" height="240" fill="black"/>
                                    </mask>
                                </defs>
                                <rect width="100%" height="100%" fill="rgba(0,0,0,0.55)" mask="url(#hole)"/>
                                <!-- dashed square border -->
                                <rect x="calc(50% - 120px)" y="calc(50% - 120px)" width="240" height="240" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="6 4"/>
                                <!-- rule-of-thirds grid -->
                                <line x1="calc(50% - 40px)" y1="calc(50% - 120px)" x2="calc(50% - 40px)" y2="calc(50% + 120px)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
                                <line x1="calc(50% + 40px)" y1="calc(50% - 120px)" x2="calc(50% + 40px)" y2="calc(50% + 120px)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
                                <line x1="calc(50% - 120px)" y1="calc(50% - 40px)" x2="calc(50% + 120px)" y2="calc(50% - 40px)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
                                <line x1="calc(50% - 120px)" y1="calc(50% + 40px)" x2="calc(50% + 120px)" y2="calc(50% + 40px)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
                            </svg>
                        </div>
                    </div>
                    <!-- zoom slider -->
                    <div style="display:flex; align-items:center; gap:10px; margin-top:14px;">
                        <span style="font-size:0.78rem;color:#555;">Zoom</span>
                        <input type="range" id="crop-zoom" min="0.5" max="4" step="0.01" value="1" style="flex:1;">
                    </div>
                    <div style="display:flex; gap:10px; margin-top:18px; justify-content:flex-end;">
                        <button id="crop-cancel" type="button" style="padding:9px 20px; border:1px solid #ccc; border-radius:6px; background:#fff; cursor:pointer;">Cancel</button>
                        <button id="crop-apply" type="button" style="padding:9px 24px; border:none; border-radius:6px; background:#0055a5; color:#fff; cursor:pointer; font-weight:600;">Apply</button>
                    </div>
                </div>
            </div>`;
            document.body.insertAdjacentHTML('beforeend', modalHTML);

            const modal        = document.getElementById('crop-modal');
            const cropImg      = document.getElementById('crop-img');
            const viewport     = document.getElementById('crop-viewport');
            const zoomSlider   = document.getElementById('crop-zoom');
            const CROP_HALF     = 120; // half-side of the square crop area (px)

            let scale = 1, offsetX = 0, offsetY = 0;
            let isDragging = false, startX = 0, startY = 0, startOX = 0, startOY = 0;
            let naturalW = 0, naturalH = 0, vpW = 0, vpH = 0;

            function applyTransform() {
                cropImg.style.transform = `translate(${offsetX}px,${offsetY}px) scale(${scale})`;
            }

            function clampOffset() {
                const cropCX = vpW / 2;
                const cropCY = vpH / 2;
                const imgW = naturalW * scale;
                const imgH = naturalH * scale;
                // keep square area fully covered by the image
                const maxX = cropCX - CROP_HALF;
                const minX = cropCX + CROP_HALF - imgW;
                const maxY = cropCY - CROP_HALF;
                const minY = cropCY + CROP_HALF - imgH;
                offsetX = Math.min(maxX, Math.max(minX, offsetX));
                offsetY = Math.min(maxY, Math.max(minY, offsetY));
            }

            function openModal(src) {
                cropImg.src = src;
                cropImg.onload = () => {
                    naturalW = cropImg.naturalWidth;
                    naturalH = cropImg.naturalHeight;
                    vpW = viewport.clientWidth;
                    vpH = viewport.clientHeight;
                    // fit image so it covers the square crop area
                    const minScale = Math.max((2*CROP_HALF)/naturalW, (2*CROP_HALF)/naturalH);
                    scale = minScale;
                    zoomSlider.min = minScale;
                    zoomSlider.value = scale;
                    offsetX = (vpW - naturalW * scale) / 2;
                    offsetY = (vpH - naturalH * scale) / 2;
                    applyTransform();
                };
                modal.style.display = 'flex';
            }

            function cropAndApply() {
                const canvas = document.createElement('canvas');
                const side = CROP_HALF * 2;  // 240px square output
                canvas.width = side;
                canvas.height = side;
                const ctx = canvas.getContext('2d');
                // No clip — plain square output
                const cropCX = vpW / 2;
                const cropCY = vpH / 2;
                const srcX = (cropCX - CROP_HALF - offsetX) / scale;
                const srcY = (cropCY - CROP_HALF - offsetY) / scale;
                const srcSize = (CROP_HALF * 2) / scale;
                ctx.drawImage(cropImg, srcX, srcY, srcSize, srcSize, 0, 0, side, side);
                const croppedBase64 = canvas.toDataURL('image/jpeg', 0.9);
                customProfilePic = croppedBase64;
                document.getElementById('profile-preview').src = croppedBase64;
                try { localStorage.setItem('user_profile_pic', croppedBase64); }
                catch(e) { console.warn('localStorage quota:', e); }
                modal.style.display = 'none';
            }

            // ── Drag ──
            viewport.addEventListener('mousedown', e => {
                isDragging = true; startX = e.clientX; startY = e.clientY;
                startOX = offsetX; startOY = offsetY;
                viewport.style.cursor = 'grabbing';
            });
            document.addEventListener('mousemove', e => {
                if (!isDragging) return;
                offsetX = startOX + (e.clientX - startX);
                offsetY = startOY + (e.clientY - startY);
                clampOffset();
                applyTransform();
            });
            document.addEventListener('mouseup', () => { isDragging = false; viewport.style.cursor = 'grab'; });

            // ── Touch drag ──
            let lastTouchX = 0, lastTouchY = 0, lastDist = 0;
            viewport.addEventListener('touchstart', e => {
                if (e.touches.length === 1) {
                    lastTouchX = e.touches[0].clientX; lastTouchY = e.touches[0].clientY;
                    startOX = offsetX; startOY = offsetY;
                } else if (e.touches.length === 2) {
                    lastDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
                }
                e.preventDefault();
            }, { passive: false });
            viewport.addEventListener('touchmove', e => {
                if (e.touches.length === 1) {
                    offsetX = startOX + (e.touches[0].clientX - lastTouchX);
                    offsetY = startOY + (e.touches[0].clientY - lastTouchY);
                } else if (e.touches.length === 2) {
                    const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
                    scale = Math.min(4, Math.max(parseFloat(zoomSlider.min), scale * (dist / lastDist)));
                    zoomSlider.value = scale;
                    lastDist = dist;
                }
                clampOffset(); applyTransform(); e.preventDefault();
            }, { passive: false });

            // ── Scroll zoom ──
            viewport.addEventListener('wheel', e => {
                scale = Math.min(4, Math.max(parseFloat(zoomSlider.min), scale - e.deltaY * 0.001));
                zoomSlider.value = scale;
                clampOffset(); applyTransform(); e.preventDefault();
            }, { passive: false });

            // ── Slider zoom ──
            zoomSlider.addEventListener('input', () => {
                scale = parseFloat(zoomSlider.value);
                clampOffset(); applyTransform();
            });

            // ── Buttons ──
            document.getElementById('crop-apply').addEventListener('click', cropAndApply);
            document.getElementById('crop-cancel').addEventListener('click', () => { modal.style.display = 'none'; });

            // ── File input trigger ──
            // IMAGE UPLOAD HANDLERS
            document.getElementById('ProfilePicUpload').addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = function(ev) { openModal(ev.target.result); };
                reader.readAsDataURL(file);
            });

        })(); // end crop modal IIFE

        // PRE-FILL DATA OR LOAD SAVED DATA
        // Global objective quill editor
        let objectiveQuill;

        window.onload = function () {
            // Initialize ObjectiveStatement editor
            objectiveQuill = new Quill('#objective-editor', {
                theme: 'snow',
                modules: { toolbar: [ ['bold', 'italic', 'underline'], [{ 'list': 'ordered'}, { 'list': 'bullet' }] ] }
            });
            objectiveQuill.on('text-change', function() {
                document.getElementById('ObjectiveStatement').value = objectiveQuill.root.innerHTML;
            });

            // Auto-sync FullName → LinkedInName (mirrors until user manually edits LinkedInName)
            let linkedInNameManuallyEdited = false;
            const fullNameInput = document.getElementById('FullName');
            const linkedInNameInput = document.getElementById('LinkedInName');

            linkedInNameInput.addEventListener('input', function() {
                // If user clears it back to empty, re-enable auto-sync
                linkedInNameManuallyEdited = this.value.trim() !== '' && this.value !== fullNameInput.value;
            });

            fullNameInput.addEventListener('input', function() {
                if (!linkedInNameManuallyEdited) {
                    linkedInNameInput.value = this.value;
                }
            });

            const savedImage = localStorage.getItem('user_profile_pic');
            if (savedImage) {
                customProfilePic = savedImage;
                document.getElementById('profile-preview').src = savedImage;
            }

            const savedDataString = localStorage.getItem('saved_resume_data');
            
            if (savedDataString) {
                // --- LOAD USER'S SAVED DATA ---
                const savedData = JSON.parse(savedDataString);
                
                document.getElementById('FullName').value = savedData.FullName || "";
                
                const objStr = savedData.ObjectiveStatement || "";
                objectiveQuill.root.innerHTML = objStr;
                document.getElementById('ObjectiveStatement').value = objStr;
                
                if(savedData.Location) document.getElementById('Location').value = savedData.Location;
                if(savedData.PhoneNumber) document.getElementById('PhoneNumber').value = savedData.PhoneNumber;
                if(savedData.EmailAddress) document.getElementById('EmailAddress').value = savedData.EmailAddress;
                if(savedData.LinkedInName) document.getElementById('LinkedInName').value = savedData.LinkedInName;
                if(savedData.LinkedInURL) document.getElementById('LinkedInURL').value = savedData.LinkedInURL;
                if(savedData.ExtraLinkURL && document.getElementById('ExtraLinkURL')) document.getElementById('ExtraLinkURL').value = savedData.ExtraLinkURL;
                if(savedData.DOB) document.getElementById('DOB').value = savedData.DOB;
                document.getElementById('Languages').value = savedData.Languages_List || "";

                // Load Dynamic Lists
                if(savedData.TechnicalSkills) savedData.TechnicalSkills.forEach(i => addTechSkill(i.TechSkill_Name, i.TechSkill_Detail));
                if(savedData.InterpersonalSkills) savedData.InterpersonalSkills.forEach(i => addInterSkill(i.InterpersonalSkill_Name, i.InterpersonalSkill_Detail || ""));
                if(savedData.Strengths) savedData.Strengths.forEach(i => addStrength(i.Strength_Name));
                if(savedData.Certifications) savedData.Certifications.forEach(i => addCert(i.Certification_Name, i.Certification_Detail));
                if(savedData.Achievements) savedData.Achievements.forEach(i => addAchievement(i.Achievement_Detail));
                if(savedData.Projects) savedData.Projects.forEach(i => addProject(i.Project_Name));

                // Load Experience
                if(savedData.Experience) {
                    savedData.Experience.forEach(i => {
                        let respHTML = "";
                        if (i.Exp_Responsibilities_HTML) {
                            respHTML = i.Exp_Responsibilities_HTML;
                        } else if (i.Exp_Responsibilities) {
                            respHTML = "<ul>" + i.Exp_Responsibilities.map(r => "<li>" + r.bullet + "</li>").join("") + "</ul>";
                        }
                        // Use raw YYYY-MM-DD dates for the form inputs; fall back to formatted string if raw not stored
                        const expStart = i.Exp_StartDate_Raw || i.Exp_StartDate || "";
                        const expEnd   = i.Exp_EndDate_Raw   || i.Exp_EndDate   || "";
                        addExperience(expStart, expEnd, i.Exp_JobTitle, i.Exp_CompanyName, i.Exp_Location, respHTML);
                    });
                }

                // Load Internship
                if(savedData.Internship) {
                    savedData.Internship.forEach(i => {
                        let respHTML = "";
                        if (i.Int_Responsibilities_HTML) {
                            respHTML = i.Int_Responsibilities_HTML;
                        } else if (i.Int_Responsibilities) {
                            respHTML = "<ul>" + i.Int_Responsibilities.map(r => "<li>" + r.bullet + "</li>").join("") + "</ul>";
                        }
                        // Use raw YYYY-MM-DD dates for the form inputs; fall back to formatted string if raw not stored
                        const intStart = i.Int_StartDate_Raw || i.Int_StartDate || "";
                        const intEnd   = i.Int_EndDate_Raw   || i.Int_EndDate   || "";
                        addInternship(intStart, intEnd, i.Int_JobTitle, i.Int_CompanyName, i.Int_Location, respHTML);
                    });
                }

                // Load Education
                if(savedData.Education) {
                    savedData.Education.forEach(i => {
                        addEducation(i.Edu_Level, i.Edu_Degree, i.Edu_Institution, i.Edu_Year, i.Edu_Percentage);
                    });
                }

            } else {
                // --- FRESH RUN: LOAD EMPTY TEMPLATE ---
                document.getElementById('FullName').value = "";
                
                objectiveQuill.root.innerHTML = "";
                document.getElementById('ObjectiveStatement').value = "";
                
                document.getElementById('Location').value = "";
                document.getElementById('PhoneNumber').value = "";
                document.getElementById('EmailAddress').value = "";
                document.getElementById('LinkedInName').value = "";
                document.getElementById('LinkedInURL').value = "";
                document.getElementById('DOB').value = "";
                document.getElementById('Languages').value = "";

                addTechSkill();
                addInterSkill();
                addStrength();
                addCert();
                addExperience();
                addInternship();
                addEducation();
                addAchievement();
                addProject();
            }
        };

        // RENDER LOGIC
        function generateResume() {
            const form = document.getElementById('cvForm');
            if (form && !form.checkValidity()) {
                form.reportValidity();
                return;
            }

            const finalData = {
                ProgrammeTitle: selectedProgrammeText,
                FullName: document.getElementById('FullName').value,
                ObjectiveStatement: document.getElementById('ObjectiveStatement').value,
                Location: document.getElementById('Location').value,
                PhoneNumber: document.getElementById('PhoneNumber').value,
                EmailAddress: document.getElementById('EmailAddress').value,
                LinkedInName: document.getElementById('LinkedInName').value,
                LinkedInDisplay_Name: document.getElementById('LinkedInName').value,
                LinkedInURL: document.getElementById('LinkedInURL').value,
                ExtraLinkURL: document.getElementById('ExtraLinkURL') ? document.getElementById('ExtraLinkURL').value : "",
                ExtraLinkLabelText: selectedProgrammeText === "SCHOOL OF DIGITAL HEALTH" ? "GitHub" : "Publications / Thesis",
                IsGitHub: selectedProgrammeText === "SCHOOL OF DIGITAL HEALTH",
                DOB: document.getElementById('DOB').value,
                DateOfBirth: document.getElementById('DOB').value,
                Languages_List: document.getElementById('Languages').value,
                ProfilePictureURL: customProfilePic,

                TechnicalSkills: [], InterpersonalSkills: [], Strengths: [], Certifications: [],
                Experience: [], Internship: [], Education: [], Achievements: [], Projects: []
            };

            document.querySelectorAll('.tech-item').forEach(i => finalData.TechnicalSkills.push({ TechSkill_Name: i.querySelector('.t-name').value, TechSkill_Detail: i.querySelector('.t-detail').value }));
            document.querySelectorAll('.int-item').forEach(i => finalData.InterpersonalSkills.push({ InterpersonalSkill_Name: i.querySelector('.i-name').value, InterpersonalSkill_Detail: i.querySelector('.i-detail').value }));
            document.querySelectorAll('.str-item').forEach(i => finalData.Strengths.push({ Strength_Name: i.querySelector('.st-name').value }));
            document.querySelectorAll('.cert-item').forEach(i => finalData.Certifications.push({ Certification_Name: i.querySelector('.c-name').value, Certification_Detail: i.querySelector('.c-detail').value }));
            document.querySelectorAll('.ach-item').forEach(i => finalData.Achievements.push({ Achievement_Detail: i.querySelector('.a-detail').value }));
            document.querySelectorAll('.proj-item').forEach(i => finalData.Projects.push({ Project_Name: i.querySelector('.p-name').value }));

            const fmtDate = (ym) => {
                if (!ym || !ym.includes("-")) return ym;
                const [y, m] = ym.split('-');
                return new Date(y, m - 1).toLocaleString('default', { month: 'short', year: 'numeric' });
            };

            document.querySelectorAll('.exp-item').forEach(item => {
                const respHTML = item.querySelector('.e-resp').value;
                const rawStart = item.querySelector('.e-start').value;
                const rawEnd   = item.querySelector('.e-end').value;

                finalData.Experience.push({
                    Exp_StartDate: fmtDate(rawStart), Exp_EndDate: fmtDate(rawEnd),
                    Exp_StartDate_Raw: rawStart, Exp_EndDate_Raw: rawEnd,
                    Exp_JobTitle: item.querySelector('.e-title').value, Exp_CompanyName: item.querySelector('.e-company').value,
                    Exp_Location: item.querySelector('.e-loc').value, Exp_Responsibilities_HTML: respHTML
                });
            });

            document.querySelectorAll('.intn-item').forEach(i => {
                const respHTML = i.querySelector('.in-resp').value;
                const rawStart = i.querySelector('.in-start').value;
                const rawEnd   = i.querySelector('.in-end').value;

                finalData.Internship.push({
                    Int_StartDate: fmtDate(rawStart), Int_EndDate: fmtDate(rawEnd),
                    Int_StartDate_Raw: rawStart, Int_EndDate_Raw: rawEnd,
                    Int_JobTitle: i.querySelector('.in-title').value, Int_CompanyName: i.querySelector('.in-company').value,
                    Int_Location: i.querySelector('.in-loc').value, Int_Responsibilities_HTML: respHTML
                });
            });

            document.querySelectorAll('.edu-item').forEach(i => {
                finalData.Education.push({
                    Edu_Level: i.querySelector('.ed-lvl').value, Edu_Degree: i.querySelector('.ed-deg').value,
                    Edu_Institution: i.querySelector('.ed-inst').value, Edu_Year: i.querySelector('.ed-yr').value,
                    Edu_Percentage: i.querySelector('.ed-pct').value
                });
            });

            finalData.hasTech = finalData.TechnicalSkills.length > 0;
            finalData.hasInter = finalData.InterpersonalSkills.length > 0;
            finalData.hasStr = finalData.Strengths.length > 0;
            finalData.hasCert = finalData.Certifications.length > 0;
            finalData.hasExp = finalData.Experience.length > 0;
            finalData.hasIntn = finalData.Internship.length > 0;
            finalData.hasEdu = finalData.Education.length > 0;
            finalData.hasAch = finalData.Achievements.length > 0;
            finalData.hasProj = finalData.Projects.length > 0;

            const formattedFinalData = finalData;

            const safeTemplateStr = document.getElementById('cvTemplateHtml').innerHTML;
            const renderedHtml = Mustache.render(safeTemplateStr, formattedFinalData);

            document.getElementById('render-target').innerHTML = renderedHtml;
            document.getElementById('form-view').style.display = 'none';
            document.getElementById('cv-output').style.display = 'block';

            // Save to local storage for future sessions
            localStorage.setItem('saved_resume_data', JSON.stringify(finalData));

            // Scroll to the top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // TRIGGER INITIAL SCALING BASED ON SLIDER DEFAULT
            adjustLayoutDensity();
        }

        function clearFormData() {
            if (confirm("Are you sure you want to clear all your saved data? This will reset the form completely and cannot be undone.")) {
                localStorage.removeItem('saved_resume_data');
                localStorage.removeItem('user_profile_pic');
                window.location.reload();
            }
        }

        function editResume() {
            document.getElementById('cv-output').style.display = 'none';
            document.getElementById('form-view').style.display = 'block';
        }

        // PERFECT SINGLE-PAGE SCALING PDF GENERATION WITH WORKING HYPERLINKS
        function downloadPDF() {
            const element = document.querySelector('.cv-container');
            const downloadBtn = document.getElementById('downloadBtn');

            downloadBtn.innerHTML = '⏳ Generating PDF...';
            downloadBtn.disabled = true;

            const options = {
                margin: 0,
                filename: 'Resume.pdf',
                image: { type: 'jpeg', quality: 1.0 },
                html2canvas: { scale: 4, useCORS: true, logging: false },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                enableLinks: true
            };

            // Collect all anchor elements with href before rendering
            const anchors = Array.from(element.querySelectorAll('a[href]'));

            html2pdf()
                .set(options)
                .from(element)
                .toPdf()
                .get('pdf')
                .then(function (pdfObj) {
                    // A4 dimensions in mm
                    const pageWidthMm  = 210;
                    const pageHeightMm = 297;

                    // Get the rendered pixel dimensions of the element
                    const elRect = element.getBoundingClientRect();
                    const elWidthPx  = elRect.width;
                    const elHeightPx = elRect.height;

                    // Scale factors: pixels → mm
                    const scaleX = pageWidthMm  / elWidthPx;
                    const scaleY = pageHeightMm / elHeightPx;

                    anchors.forEach(function (anchor) {
                        const href = anchor.getAttribute('href');
                        if (!href || href.startsWith('#')) return; // skip in-page anchors

                        const rect = anchor.getBoundingClientRect();

                        // Position relative to the cv-container
                        const relTop    = rect.top  - elRect.top;
                        const relLeft   = rect.left - elRect.left;
                        const relBottom = rect.bottom - elRect.top;
                        const relRight  = rect.right  - elRect.left;

                        // Determine which PDF page this link falls on
                        const pageNum   = Math.floor(relTop / elHeightPx) + 1;
                        const pageOffset = (pageNum - 1) * elHeightPx;

                        // Convert to mm, flipping Y because PDF origin is bottom-left
                        const xMm      = relLeft   * scaleX;
                        const yTopMm   = (relTop   - pageOffset) * scaleY;
                        const widthMm  = (relRight  - relLeft)   * scaleX;
                        const heightMm = (relBottom - relTop)    * scaleY;

                        // jsPDF link API: addLink(x, y, w, h, url) — y is from top in 'mm' unit
                        try {
                            pdfObj.link(xMm, yTopMm, widthMm, heightMm, { url: href });
                        } catch (e) {
                            // fallback for older jsPDF versions
                            try { pdfObj.textWithLink('', xMm, yTopMm, { url: href }); } catch (_) {}
                        }
                    });

                    return pdfObj;
                })
                .save()
                .then(() => {
                    downloadBtn.innerHTML = '🖨️ Download PDF';
                    downloadBtn.disabled = false;
                })
                .catch(() => {
                    downloadBtn.innerHTML = '🖨️ Download PDF';
                    downloadBtn.disabled = false;
                });
        }

        function downloadWord() {
            const wordBtn = document.getElementById('downloadWordBtn');
            wordBtn.innerHTML = '⏳ Generating...';
            wordBtn.disabled = true;

            try {
                const cvEl = document.querySelector('.cv-container');
                if (!cvEl) throw new Error('CV element not found');

                // Collect all stylesheet text accessible from the page
                let cssText = '';
                try {
                    Array.from(document.styleSheets).forEach(function(sheet) {
                        try {
                            Array.from(sheet.cssRules || []).forEach(function(rule) {
                                cssText += rule.cssText + '\n';
                            });
                        } catch(e) {}
                    });
                } catch(e) {}

                // Get computed primary color for inline fallback
                const primaryColor = getComputedStyle(document.documentElement)
                    .getPropertyValue('--primary-color').trim() || '#248BB4';

                // Build a self-contained HTML document
                const htmlContent = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
  ${cssText}
  .cv-container {
    width: 210mm;
    min-height: 296mm;
    max-height: none !important;
    height: auto !important;
    overflow: visible !important;
    --primary-color: ${primaryColor};
    --fit: 1; --text: 1; --space: 1; --m-fit: 1;
  }
  * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
</style>
</head>
<body>
${cvEl.outerHTML}
</body>
</html>`;

                if (typeof htmlDocx === 'undefined') {
                    throw new Error('html-docx-js library not loaded');
                }

                const blob = htmlDocx.asBlob(htmlContent);
                const url  = URL.createObjectURL(blob);
                const a    = document.createElement('a');
                a.href     = url;
                a.download = 'Resume.docx';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);

            } catch(err) {
                console.error('Word download failed:', err);
                alert('Word download failed: ' + err.message + '\n\nTry using the PDF download instead.');
            } finally {
                wordBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h2l2 5 2-5h2"/></svg> Download Word';
                wordBtn.disabled = false;
            }
        }

        function adjustLayoutDensity() {
            const sliderVal = parseInt(document.getElementById('layoutSlider').value);
            const cv = document.querySelector('.cv-container');
            if (!cv) return;

            const textScale = 1 + (sliderVal * 0.04);
            const spaceScale = 1 - (sliderVal * 0.10);

            cv.style.setProperty('--text', textScale);
            cv.style.setProperty('--space', spaceScale);

            applyDynamicTypographyScaling();
        }

        function applyDynamicTypographyScaling() {
            const cv = document.querySelector('.cv-container');
            if (!cv) return;

            cv.style.setProperty('--fit', '1');
            cv.style.setProperty('--m-fit', '1');

            cv.style.minHeight = '0';
            cv.style.maxHeight = 'none';
            cv.style.height = 'auto';

            const dummy = document.createElement('div');
            dummy.style.height = '296mm';
            document.body.appendChild(dummy);
            const targetHeight = dummy.clientHeight;
            document.body.removeChild(dummy);

            let currentScale = 1.0;

            if (cv.clientHeight > targetHeight) {
                while (cv.clientHeight > targetHeight && currentScale > 0.50) {
                    currentScale -= 0.01;
                    cv.style.setProperty('--fit', currentScale);
                }
            } else {
                while (cv.clientHeight < targetHeight && currentScale < 1.25) {
                    currentScale += 0.01;
                    cv.style.setProperty('--fit', currentScale);

                    if (cv.clientHeight > targetHeight) {
                        currentScale -= 0.01;
                        cv.style.setProperty('--fit', currentScale);
                        break;
                    }
                }
            }

            const mainContent = document.querySelector('.main-content');

            if (mainContent && mainContent.lastElementChild) {
                let mFit = 1.0;

                const getBottomY = () => {
                    const lastChild = mainContent.lastElementChild;
                    const margin = parseFloat(window.getComputedStyle(lastChild).marginBottom) || 0;
                    return lastChild.offsetTop + lastChild.offsetHeight + margin;
                };

                while (getBottomY() < targetHeight && mFit < 1.30) {
                    mFit += 0.01;
                    cv.style.setProperty('--m-fit', mFit);

                    if (getBottomY() > targetHeight || cv.clientHeight > targetHeight) {
                        mFit -= 0.01;
                        cv.style.setProperty('--m-fit', mFit);
                        break;
                    }
                }
            }

            cv.style.minHeight = '296mm';
            cv.style.height = '296mm';
            cv.style.maxHeight = '296mm';
        }


