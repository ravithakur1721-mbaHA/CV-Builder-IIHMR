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
                "--primary-color": "#2E8B57",
                "--primary-dark": "#1c5435",
                "--primary-light": "#E0F2E9",
                "--primary-accent": "#3CB371",
                "--primary-deep": "#246B43",
                "--banner-text": "#dcf0e5"
            },
            "pharma": {
                "--primary-color": "#8b3a62",
                "--primary-dark": "#5e2642",
                "--primary-light": "#f5e6ee",
                "--primary-accent": "#a8547d",
                "--primary-deep": "#732c50",
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
            div.innerHTML = '<button type="button" class="remove-btn" onclick="this.parentElement.remove()">X</button>' +
                '<input type="text" class="t-name" placeholder="Skill (e.g. Python)" value="' + name + '" style="margin-bottom:5px;">' +
                '<input type="text" class="t-detail" placeholder="Detail (Optional)" value="' + detail + '">';
            container.appendChild(div);
        }
        function addInterSkill(name = "") {
            const container = document.getElementById('inter-skills-container');
            const div = document.createElement('div'); div.className = 'dynamic-item int-item';
            div.innerHTML = '<button type="button" class="remove-btn" onclick="this.parentElement.remove()">X</button>' +
                '<input type="text" class="i-name" placeholder="Skill" value="' + name + '">';
            container.appendChild(div);
        }
        function addStrength(name = "", detail = "") {
            const container = document.getElementById('strengths-container');
            const div = document.createElement('div'); div.className = 'dynamic-item str-item';
            div.innerHTML = '<button type="button" class="remove-btn" onclick="this.parentElement.remove()">X</button>' +
                '<input type="text" class="st-name" placeholder="Strength" value="' + name + '" style="margin-bottom:5px;">' +
                '<input type="text" class="st-detail" placeholder="Detail (Optional)" value="' + detail + '">';
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
            div.innerHTML = '<button type="button" class="remove-btn" onclick="this.parentElement.remove()">X</button>' +
                '<div style="display:flex; gap: 10px;">' +
                '<div style="flex:1;"><input type="text" class="e-start" placeholder="Start Date" value="' + start + '"></div>' +
                '<div style="flex:1;"><input type="text" class="e-end" placeholder="End Date" value="' + end + '"></div>' +
                '</div>' +
                '<div style="display:flex; gap: 10px; margin-top:10px;">' +
                '<div style="flex:1;"><input type="text" class="e-title" placeholder="Job Title" value="' + title + '"></div>' +
                '<div style="flex:1;"><input type="text" class="e-company" placeholder="Company" value="' + company + '"></div>' +
                '<div style="flex:1;"><input type="text" class="e-loc" placeholder="Location" value="' + loc + '"></div>' +
                '</div>' +
                '<textarea class="e-resp" rows="3" placeholder="Responsibilities (One per line)" style="margin-top:10px;">' + resp + '</textarea>';
            container.appendChild(div);
        }

        function addInternship(start = "", end = "", title = "", company = "", loc = "", resp = "") {
            const container = document.getElementById('internship-container');
            const div = document.createElement('div'); div.className = 'dynamic-item intn-item';
            div.innerHTML = '<button type="button" class="remove-btn" onclick="this.parentElement.remove()">X</button>' +
                '<div style="display:flex; gap: 10px;">' +
                '<div style="flex:1;"><input type="text" class="in-start" placeholder="Start Date" value="' + start + '"></div>' +
                '<div style="flex:1;"><input type="text" class="in-end" placeholder="End Date" value="' + end + '"></div>' +
                '</div>' +
                '<div style="display:flex; gap: 10px; margin-top:10px;">' +
                '<div style="flex:1;"><input type="text" class="in-title" placeholder="Intern Title" value="' + title + '"></div>' +
                '<div style="flex:1;"><input type="text" class="in-company" placeholder="Company" value="' + company + '"></div>' +
                '<div style="flex:1;"><input type="text" class="in-loc" placeholder="Location" value="' + loc + '"></div>' +
                '</div>' +
                '<textarea class="in-resp" rows="3" placeholder="Responsibilities (One per line)" style="margin-top:10px;">' + resp + '</textarea>';
            container.appendChild(div);
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


        // IMAGE UPLOAD HANDLERS
        document.getElementById('ProfilePicUpload').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (!file) return;

            // Enforce a strict 2MB file size limit
            const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
            if (file.size > maxSizeInBytes) {
                alert("File is too large! Please select an image under 2MB to ensure your resume saves correctly.");
                this.value = ""; // Clear the file input so they try again
                return;
            }

            const reader = new FileReader();
            
            reader.onload = function(event) {
                const base64Image = event.target.result;
                customProfilePic = base64Image;
                document.getElementById('profile-preview').src = base64Image;
                
                // Safe save to localStorage
                try {
                    localStorage.setItem('user_profile_pic', base64Image);
                } catch (error) {
                    // Check if the error is a QuotaExceededError despite the 2MB limit
                    if (error.name === 'QuotaExceededError' || error.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                        console.warn("Local storage quota exceeded.");
                        alert("Storage limit reached. The image will appear on your resume right now, but won't be saved for your next session. Consider using a smaller image.");
                    }
                }
            };
            
            reader.readAsDataURL(file); 
        });

        // PRE-FILL DATA OR LOAD SAVED DATA
        window.onload = function () {
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
                document.getElementById('ObjectiveStatement').value = savedData.ObjectiveStatement || "";
                document.getElementById('Location').value = savedData.Location || "";
                document.getElementById('PhoneNumber').value = savedData.PhoneNumber || "";
                document.getElementById('EmailAddress').value = savedData.EmailAddress || "";
                document.getElementById('LinkedInName').value = savedData.LinkedInDisplay_Name || "";
                document.getElementById('LinkedInURL').value = savedData.LinkedInURL || "";
                document.getElementById('DOB').value = savedData.DateOfBirth || "";
                document.getElementById('Languages').value = savedData.Languages_List || "";

                // Load Dynamic Lists
                if(savedData.TechnicalSkills) savedData.TechnicalSkills.forEach(i => addTechSkill(i.TechSkill_Name, i.TechSkill_Detail));
                if(savedData.InterpersonalSkills) savedData.InterpersonalSkills.forEach(i => addInterSkill(i.InterpersonalSkill_Name));
                if(savedData.Strengths) savedData.Strengths.forEach(i => addStrength(i.Strength_Name, i.Strength_Detail));
                if(savedData.Certifications) savedData.Certifications.forEach(i => addCert(i.Certification_Name, i.Certification_Detail));
                if(savedData.Achievements) savedData.Achievements.forEach(i => addAchievement(i.Achievement_Detail));
                if(savedData.Projects) savedData.Projects.forEach(i => addProject(i.Project_Name));

                // Load Experience
                if(savedData.Experience) {
                    savedData.Experience.forEach(i => {
                        const resp = i.Exp_Responsibilities ? i.Exp_Responsibilities.map(r => r.bullet).join('\n') : "";
                        addExperience(i.Exp_StartDate, i.Exp_EndDate, i.Exp_JobTitle, i.Exp_CompanyName, i.Exp_Location, resp);
                    });
                }

                // Load Internship
                if(savedData.Internship) {
                    savedData.Internship.forEach(i => {
                        const resp = i.Int_Responsibilities ? i.Int_Responsibilities.map(r => r.bullet).join('\n') : "";
                        addInternship(i.Int_StartDate, i.Int_EndDate, i.Int_JobTitle, i.Int_CompanyName, i.Int_Location, resp);
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
                document.getElementById('ObjectiveStatement').value = "Public Health Data Analyst with a strong foundation in HMIS, Healthcare Analytics, and Data Quality Improvement. Skilled in cleaning, validating, and analyzing large-scale health datasets to identify trends, detect inconsistencies, and enhance reporting accuracy.";
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

                addStrength("Critical Thinking", "");
                addStrength("Analytical Thinking", "");
                addStrength("Technologically Adept", "Technophile");
                addStrength("Ideator", "");

                addCert("Marketing Data Analysis", "Virtual Internship from YuvaIntern");
                addCert("Data Analyst course", "Swayam Portal - ongoing");
                addCert("Data ETL Workshop", "IIHMR University Jaipur");
                addCert("Lean Six Sigma in Healthcare", "IIHMR University Jaipur");

                addExperience("2025 MARCH", "2025 MAY", "Software Developer", "Atavata Business Pvt. Ltd", "Jaipur, RJ", "Developed a secure defense web application for the Indian Army under strict protocols.\nDelivered scalable solutions within tight timelines via cross-functional collaboration.");
                addExperience("2024 APRIL", "2024 OCTOBER", "Business Development Executive", "Ogrelogic Solutions LLC", "Noida", "Achieved a 60% conversion rate by identifying business opportunities through market trend analysis.\nOptimised lead generation and stakeholder communication by managing digital campaigns and SEO.");

                addInternship("2023 JULY", "2023 AUGUST", "Software Developer Intern", "InfoTechus Pvt. Ltd", "Noida", "Collaborated on web portal development and bug fixes.\nAssisted in API documentation.");
                addInternship("2021 AUGUST", "2020 SEPTEMBER", "Embedded Engineer Intern", "NSIC", "Okhla, Delhi", "Conducted hardware testing and circuit validation.");

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
            const finalData = {
                ProgrammeTitle: selectedProgrammeText,
                FullName: document.getElementById('FullName').value,
                ObjectiveStatement: document.getElementById('ObjectiveStatement').value,
                Location: document.getElementById('Location').value,
                PhoneNumber: document.getElementById('PhoneNumber').value,
                EmailAddress: document.getElementById('EmailAddress').value,
                LinkedInDisplay_Name: document.getElementById('LinkedInName').value,
                LinkedInURL: document.getElementById('LinkedInURL').value,
                DateOfBirth: document.getElementById('DOB').value,
                Languages_List: document.getElementById('Languages').value,
                ProfilePictureURL: customProfilePic,

                TechnicalSkills: [], InterpersonalSkills: [], Strengths: [], Certifications: [],
                Experience: [], Internship: [], Education: [], Achievements: [], Projects: []
            };

            document.querySelectorAll('.tech-item').forEach(i => finalData.TechnicalSkills.push({ TechSkill_Name: i.querySelector('.t-name').value, TechSkill_Detail: i.querySelector('.t-detail').value }));
            document.querySelectorAll('.int-item').forEach(i => finalData.InterpersonalSkills.push({ InterpersonalSkill_Name: i.querySelector('.i-name').value }));
            document.querySelectorAll('.str-item').forEach(i => finalData.Strengths.push({ Strength_Name: i.querySelector('.st-name').value, Strength_Detail: i.querySelector('.st-detail').value }));
            document.querySelectorAll('.cert-item').forEach(i => finalData.Certifications.push({ Certification_Name: i.querySelector('.c-name').value, Certification_Detail: i.querySelector('.c-detail').value }));
            document.querySelectorAll('.ach-item').forEach(i => finalData.Achievements.push({ Achievement_Detail: i.querySelector('.a-detail').value }));
            document.querySelectorAll('.proj-item').forEach(i => finalData.Projects.push({ Project_Name: i.querySelector('.p-name').value }));

            document.querySelectorAll('.exp-item').forEach(item => {
                const respText = item.querySelector('.e-resp').value;
                const bulletsArray = respText.split('\n').filter(line => line.trim() !== '').map(line => ({ bullet: line }));
                finalData.Experience.push({
                    Exp_StartDate: item.querySelector('.e-start').value, Exp_EndDate: item.querySelector('.e-end').value,
                    Exp_JobTitle: item.querySelector('.e-title').value, Exp_CompanyName: item.querySelector('.e-company').value,
                    Exp_Location: item.querySelector('.e-loc').value, Exp_Responsibilities: bulletsArray
                });
            });

            document.querySelectorAll('.intn-item').forEach(i => {
                const respText = i.querySelector('.in-resp').value;
                const bulletsArray = respText.split('\n').filter(line => line.trim() !== '').map(line => ({ bullet: line }));
                finalData.Internship.push({
                    Int_StartDate: i.querySelector('.in-start').value, Int_EndDate: i.querySelector('.in-end').value,
                    Int_JobTitle: i.querySelector('.in-title').value, Int_CompanyName: i.querySelector('.in-company').value,
                    Int_Location: i.querySelector('.in-loc').value, Int_Responsibilities: bulletsArray
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

            const safeTemplateStr = document.getElementById('cvTemplateHtml').innerHTML;
            const renderedHtml = Mustache.render(safeTemplateStr, finalData);

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
                html2canvas: { scale: 3, useCORS: true },
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
