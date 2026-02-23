let jobs = [
    {
        id: 1,
        company: "Mobile First Corp",
        role: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: "all",
        applied: false,
        originalStyle: true
    },
    {
        id: 2,
        company: "WebFlow Agency",
        role: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salary: "$80,000 - $120,000",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
        status: "all",
        applied: false
    },
    {
        id: 3,
        company: "DataViz Solutions",
        role: "Data Visualization Specialist",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$125,000 - $165,000",
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
        status: "all",
        applied: false
    },
    {
        id: 4,
        company: "CloudFirst Inc",
        role: "Backend Developer",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$140,000 - $190,000",
        description: "Design and maintain scalable backend systems using Python and AWS.",
        status: "all",
        applied: false
    },
    {
        id: 5,
        company: "Innovation Labs",
        role: "UI/UX Engineer",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$110,000 - $150,000",
        description: "Create beautiful and functional user interfaces.",
        status: "all",
        applied: false
    },
    {
        id: 6,
        company: "MegaCorp Solutions",
        role: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-time",
        salary: "$130,000 - $170,000",
        description: "Build enterprise applications with JavaScript and modern frameworks.",
        status: "all",
        applied: false
    },
    {
        id: 7,
        company: "StartupXYZ",
        role: "Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "$120,000 - $160,000",
        description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
        status: "all",
        applied: false
    },
    {
        id: 8,
        company: "TechCorp Industries",
        role: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
        status: "all",
        applied: false
    }
];

function updateCounts() {
    document.getElementById("totalCount").textContent = jobs.length;
    document.getElementById("interviewCount").textContent =
        jobs.filter(j => j.status === "interview").length;
    document.getElementById("rejectedCount").textContent =
        jobs.filter(j => j.status === "rejected").length;
}

function renderJobs(tab = "all") {
    const container = document.getElementById("jobs-container");

    const filtered = tab === "all"
        ? jobs
        : jobs.filter(j => j.status === tab);

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="bg-base-100 p-16 text-center rounded-xl shadow-sm">
                <img src="jobs.png" class="mx-auto w-24 mb-6" />
                <h3 class="text-xl font-semibold">No jobs available</h3>
                <p class="text-base-content/60 mt-2">
                    Check back soon for new job opportunities
                </p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(job => {

        const interviewActive = job.status === "interview";
        const rejectedActive = job.status === "rejected";

        return `
        <div class="bg-base-100 p-8 rounded-xl mb-6 shadow-sm">

            <div class="flex justify-between">
                <div>
                    <h2 class="font-bold text-lg">${job.company}</h2>
                    <p class="text-base-content/70">${job.role}</p>
                    <p class="text-sm text-base-content/60 mt-2">
                        ${job.location} • ${job.type} • ${job.salary}
                    </p>
                </div>

             <button onclick="deleteJob(${job.id})"
         class="btn btn-circle btn-sm btn-ghost border">
         <i class="fa-regular fa-trash-can"></i>
             </button>
            </div>

            <div class="mt-4">
                <span class="px-4 py-1 rounded-md text-sm font-medium 
                    ${
                        job.status === 'interview'
                            ? 'bg-success/20 text-success'
                            : job.status === 'rejected'
                            ? 'bg-error/20 text-error'
                            : 'bg-base-200'
                    }">
                    ${
                        job.status === 'interview'
                            ? 'APPLIED'
                            : job.status === 'rejected'
                            ? 'REJECTED'
                            : 'NOT APPLIED'
                    }
                </span>
            </div>

            <p class="mt-4 text-base-content/70">${job.description}</p>

            <div class="flex gap-4 mt-6">
                <button onclick="updateStatus(${job.id}, 'interview')"
                    class="px-6 py-2 border rounded-md font-medium transition
                    ${interviewActive
                        ? 'bg-green-600 text-white border-green-600'
                        : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'}">
                    INTERVIEW
                </button>

                <button onclick="updateStatus(${job.id}, 'rejected')"
                    class="px-6 py-2 border rounded-md font-medium transition
                    ${rejectedActive
                        ? 'bg-red-600 text-white border-red-600'
                        : 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white'}">
                    REJECTED
                </button>
            </div>
        </div>
        `;
    }).join("");
}

function updateStatus(id, status) {
    const job = jobs.find(j => j.id === id);
    job.status = status;
    job.applied = true;
    updateCounts();
    renderJobs(getActiveTab());
}

function deleteJob(id) {
    if (confirm("Delete this job?")) {
        jobs = jobs.filter(j => j.id !== id);
        updateCounts();
        renderJobs(getActiveTab());
    }
}

function getActiveTab() {
    return document.querySelector(".tab-active").dataset.tab;
}

document.addEventListener("DOMContentLoaded", () => {
    updateCounts();
    renderJobs("all");

    document.querySelectorAll(".tab").forEach(tab => {
        tab.addEventListener("click", function () {
            document.querySelectorAll(".tab").forEach(t => t.classList.remove("tab-active"));
            this.classList.add("tab-active");
            renderJobs(this.dataset.tab);
        });
    });
});