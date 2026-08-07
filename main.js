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
                        addExperience(i.Exp_StartDate, i.Exp_EndDate, i.Exp_JobTitle, i.Exp_CompanyName, i.Exp_Location, respHTML);
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
                        addInternship(i.Int_StartDate, i.Int_EndDate, i.Int_JobTitle, i.Int_CompanyName, i.Int_Location, respHTML);
                    });
                }

                // Load Education
                if(savedData.Education) {
                    savedData.Education.forEach(i => {
                        addEducation(i.Edu_Level, i.Edu_Degree, i.Edu_Institution, i.Edu_Year, i.Edu_Percentage);
                    });
                }

            } else {
                // --- FRESH RUN: LOAD DEFAULT TEMPLATE DATA ---
                document.getElementById('FullName').value = "Ravi Kumar Thakur";
                
                const defObj = "Public Health Data Analyst with a strong foundation in HMIS, Healthcare Analytics, and Data Quality Improvement. Skilled in cleaning, validating, and analyzing large-scale health datasets to identify trends, detect inconsistencies, and enhance reporting accuracy.";
                objectiveQuill.root.innerHTML = defObj;
                document.getElementById('ObjectiveStatement').value = defObj;
                
                document.getElementById('Location').value = "New Delhi";
                document.getElementById('PhoneNumber').value = "8595799852";
                document.getElementById('EmailAddress').value = "ravi.ha02@iihmr.in";
                document.getElementById('LinkedInName').value = "Ravi Kr. Thakur";
                document.getElementById('LinkedInURL').value = "https://www.linkedin.com/in/ravi-kumar-thakur-496003370/";
                document.getElementById('DOB').value = "18/04/2002";
                document.getElementById('Languages').value = "English and Hindi";

                addTechSkill("MS OFFICE SUITE", "");
                addTechSkill("EXCEL", "Advanced");
                addTechSkill("POWER BI", "Dashboard");
                addTechSkill("DBMS", "SQL & MongoDB");
                addTechSkill("PYTHON", "Fundamentals & Data Manipulation");

                addInterSkill("Effective Communication");
                addInterSkill("Presentions");
                addInterSkill("Collaborative");
                addInterSkill("Adaptive");
                addInterSkill("Storytelling with data");
                addInterSkill("Market Research");

                addStrength("Critical Thinking");
                addStrength("Analytical Thinking");
                addStrength("Technologically Adept");
                addStrength("Ideator");

                addCert("Marketing Data Analysis", "Virtual Internship from YuvaIntern");
                addCert("Data Analyst course", "Swayam Portal - ongoing");
                addCert("Data ETL Workshop", "IIHMR University Jaipur");
                addCert("Lean Six Sigma in Healthcare", "IIHMR University Jaipur");

                addExperience("2025-03-01", "2025-05-01", "Software Developer", "Atavata Business Pvt. Ltd", "Jaipur, RJ", "<ul><li>Developed a secure defense web application for the Indian Army under strict protocols.</li><li>Delivered scalable solutions within tight timelines via cross-functional collaboration.</li></ul>");
                addExperience("2024-04-01", "2024-10-01", "Business Development Executive", "Ogrelogic Solutions LLC", "Noida", "<ul><li>Achieved a 60% conversion rate by identifying business opportunities through market trend analysis.</li><li>Optimised lead generation and stakeholder communication by managing digital campaigns and SEO.</li></ul>");

                addInternship("2023-07-01", "2023-08-01", "Software Developer Intern", "InfoTechus Pvt. Ltd", "Noida", "<ul><li>Collaborated on web portal development and bug fixes.</li><li>Assisted in API documentation.</li></ul>");
                addInternship("2020-09-01", "2021-08-01", "Embedded Engineer Intern", "NSIC", "Okhla, Delhi", "<ul><li>Conducted hardware testing and circuit validation.</li></ul>");

                addEducation("PG", "MBA", "IIHMR University, Jaipur", "Pursuing", "-");
                addEducation("UG", "BTECH", "RKGIT, Ghaziabad", "2024", "68%");
                addEducation("Diploma", "ECE", "PIT, Delhi", "2021", "90%");
                addEducation("X", "CBSE", "Govt. Co-Ed Sr. Sec School, Delhi", "2018", "72%");

                addAchievement("Achieved 1st Division in both B.Tech and Diploma.");
                addAchievement("Elected Student Placement Coordinator (MBA 1st Year).");
                addAchievement("Active member of the Operations Team, IIHMR Startups.");
                addAchievement("Successful launch of a Summer Internship Open Learning Bootcamp.");

                addProject("Hospital Management Information System (HMIS)");
                addProject("Custom Dashboard for Tracing Student Placement Progress");
                addProject("Ticket Wave (Online Ticketing Platform)");
                addProject("Home Automation");
                addProject("Automatic Irrigation System");
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
                LinkedInDisplay_Name: document.getElementById('LinkedInName').value,
                LinkedInURL: document.getElementById('LinkedInURL').value,
                ExtraLinkURL: document.getElementById('ExtraLinkURL') ? document.getElementById('ExtraLinkURL').value : "",
                ExtraLinkLabelText: selectedProgrammeText === "SCHOOL OF DIGITAL HEALTH" ? "GitHub" : "Publications / Thesis",
                IsGitHub: selectedProgrammeText === "SCHOOL OF DIGITAL HEALTH",
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

            document.querySelectorAll('.exp-item').forEach(item => {
                const respHTML = item.querySelector('.e-resp').value;
                
                const fmtDate = (ym) => {
                    if (!ym || !ym.includes("-")) return ym;
                    const [y, m] = ym.split('-');
                    return new Date(y, m - 1).toLocaleString('default', { month: 'short', year: 'numeric' });
                };

                finalData.Experience.push({
                    Exp_StartDate: fmtDate(item.querySelector('.e-start').value), Exp_EndDate: fmtDate(item.querySelector('.e-end').value),
                    Exp_JobTitle: item.querySelector('.e-title').value, Exp_CompanyName: item.querySelector('.e-company').value,
                    Exp_Location: item.querySelector('.e-loc').value, Exp_Responsibilities_HTML: respHTML
                });
            });

            document.querySelectorAll('.intn-item').forEach(i => {
                const respHTML = i.querySelector('.in-resp').value;
                
                const fmtDate = (ym) => {
                    if (!ym || !ym.includes("-")) return ym;
                    const [y, m] = ym.split('-');
                    return new Date(y, m - 1).toLocaleString('default', { month: 'short', year: 'numeric' });
                };

                finalData.Internship.push({
                    Int_StartDate: fmtDate(i.querySelector('.in-start').value), Int_EndDate: fmtDate(i.querySelector('.in-end').value),
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

            function formatProperCase(str) {
                if (typeof str !== 'string' || !str) return str;
                return str.replace(/\w\S*/g, function(txt){
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
            }
            function formatSentenceCase(str) {
                if (typeof str !== 'string' || !str) return str;
                return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
            }
            function formatData(data, keyName = "") {
                if (typeof data === 'string') {
                    const sentenceKeys = [];
                    const skipKeys = [
                        // identity / URLs
                        'ProfilePictureURL', 'LinkedInURL', 'ExtraLinkURL', 'ExtraLinkLabelText', 'EmailAddress',
                        // dates
                        'Exp_StartDate', 'Exp_EndDate', 'Int_StartDate', 'Int_EndDate',
                        // education
                        'Edu_Level', 'Edu_Degree', 'Edu_Institution', 'Edu_Year', 'Edu_Percentage',
                        // preserved as-typed
                        'ProgrammeTitle', 'Project_Name',
                        // summary & achievements — preserve user casing exactly
                        'ObjectiveStatement', 'Achievement_Detail',
                        // bullet points (exp / internship)
                        'bullet',
                        // technical & interpersonal skills — preserve user casing exactly
                        'TechSkill_Name', 'TechSkill_Detail', 'InterpersonalSkill_Name', 'InterpersonalSkill_Detail',
                        // certifications
                        'Certification_Name', 'Certification_Detail'
                    ];
                    if (skipKeys.includes(keyName)) return data;
                    if (sentenceKeys.includes(keyName)) return formatSentenceCase(data);
                    return formatProperCase(data);
                }
                if (Array.isArray(data)) {
                    return data.map(item => formatData(item, keyName));
                }
                if (typeof data === 'object' && data !== null) {
                    const newData = {};
                    for (const key in data) {
                        newData[key] = formatData(data[key], key);
                    }
                    return newData;
                }
                return data;
            }

            const formattedFinalData = formatData(finalData);

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

        function editResume() {
            document.getElementById('cv-output').style.display = 'none';
            document.getElementById('form-view').style.display = 'block';
        }

        // PERFECT SINGLE-PAGE SCALING PDF GENERATION
        function downloadPDF() {
            const element = document.querySelector('.cv-container');
            const downloadBtn = document.getElementById('downloadBtn');

            downloadBtn.innerHTML = '⏳ Generating PDF...';
            downloadBtn.disabled = true;

            const options = {
                margin: 0,
                filename: 'Resume.pdf',
                image: { type: 'jpeg', quality: 1.0 },
                html2canvas: { scale: 4, useCORS: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            html2pdf().set(options).from(element).save().then(() => {
                downloadBtn.innerHTML = '🖨️ Download PDF';
                downloadBtn.disabled = false;
            });
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


