/* ============================================================
   EDIT THIS FILE to update your site.
   1. PROFILE       – your photo and profile links
   2. PUBLICATIONS  – add a new paper by copying one entry
   Everything below the "no need to edit" line can be left alone.
   ============================================================ */

const PROFILE = {
  // Put a photo in the assets folder and write its path here, e.g. "assets/profile.jpg".
  // While this is empty, the home page shows the co-design diagram instead.
  photo: "assets/profile.jpg",

  // Paste the full address of each profile. Empty ones are simply not shown.
  links: {
    github: "https://github.com/jungyeonkim9986",
    scholar: "https://scholar.google.com/citations?user=U-CuWcwAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/jungyeon-kim-127780170/",
    orcid: "",         // e.g. "https://orcid.org/0000-0000-0000-0000"
    researchgate: ""
  }
};

/* Newest first within each type.
   type:     "journal" | "conference" | "other"
   authors:  write your own name exactly as "Kim, J." so it is set in bold; add † for co-first authors
   selected: true shows the paper on the home page
   Optional extras for any paper (leave out what you do not have):
     image: "assets/my-figure.jpg"                        a figure shown beside the paper
     links: { pdf: "...", code: "...", video: "...", project: "..." }   extra link buttons          */
const PUBLICATIONS = [
  {
    id: "bmg-review-2026", type: "journal", year: 2026,
    authors: "Park, S. J., Cho, S., Ng, P. H., Lee, J., Kim, J., Jeon, S., Khan, M. T., Chen, L., Wu, Q., & Moon, S. K.",
    title: "Insights into the industrial applications and future directions of bulk metallic glasses via additive manufacturing",
    venue: "International Journal of Precision Engineering and Manufacturing",
    doi: "10.1007/s12541-026-01449-0"
  },
  {
    id: "mex-sintering-aging-2026", type: "journal", year: 2026,
    authors: "Jeon, S.†, Kim, J.†, Go, A., Choi, J. P., & Moon, S. K.",
    title: "AI-Based Mechanical Properties Prediction of Sintering-Aging Combined Effect in Metal-Material Extrusion",
    venue: "International Journal of Precision Engineering and Manufacturing-Green Technology",
    doi: "10.1007/s40684-025-00826-w"
  },
  {
    id: "hybrid-scheduling-2026", type: "journal", year: 2026, selected: true,
    authors: "Lee, J., Park, S. J., Choi, J. P., Kim, J., Jeon, S., & Moon, S. K.",
    title: "Design Complexity-Driven Optimization of Production Efficiency and Scheduling for Metal-Polymer Hybrid Structures in Additive Manufacturing",
    venue: "International Journal of Precision Engineering and Manufacturing-Green Technology",
    doi: "10.1007/s40684-026-00843-3"
  },
  {
    id: "bmg-pbf-ml-2025", type: "journal", year: 2025,
    authors: "Kim, J., Jeon, S., Park, S. J., & Moon, S. K.",
    title: "A Data-Efficient Machine Learning Approach for Amorphous Fe-based Bulk Metallic Glass Fabrication in Powder Bed Fusion",
    venue: "International Journal of AI for Materials and Design",
    doi: "10.36922/IJAMD025390036"
  },
  {
    id: "ded-bead-shape-2025", type: "journal", year: 2025,
    authors: "Lee, K.-K.†, Kim, J.†, Moon, S. K., & Ahn, D.-G.",
    title: "Prediction of the Bead Shape in a Directed Energy Deposition Process Using Machine Learning with Limited Point Data",
    venue: "International Journal of Precision Engineering and Manufacturing-Green Technology",
    details: "1–11",
    doi: "10.1007/s40684-025-00795-0"
  },
  {
    id: "software-defined-factory-2025", type: "journal", year: 2025, selected: true,
    authors: "Kim, J.†, Lee, J.†, Park, S. J., Lee, J., Song, B., & Moon, S. K.",
    title: "Software-defined Factory: Paradigm Shift in Manufacturing Towards Industry 5.0",
    venue: "International Journal of Precision Engineering and Manufacturing-Smart Technology",
    details: "3(2), 201–209",
    doi: "10.57062/ijpem-st.2025.00066"
  },
  {
    id: "drl-scheduling-ieem-2025", type: "conference", year: 2025, selected: true,
    authors: "Kim, J., Lee, J., & Moon, S. K.",
    title: "Hybrid Deep Reinforcement Learning-Based Product Scheduling Optimization and Machine Repair Prioritization",
    venue: "IEEE International Conference on Industrial Engineering and Engineering Management (IEEM)",
    doi: "10.1109/IEEM63636.2025.11357710"
  },
  {
    id: "software-defined-product-ieem-2025", type: "conference", year: 2025, selected: true,
    authors: "Lee, J., Kim, J., & Moon, S. K.",
    title: "Software-defined Product Architecture: Status, Challenges and Future Perspectives",
    venue: "IEEE International Conference on Industrial Engineering and Engineering Management (IEEM)",
    doi: "10.1109/IEEM63636.2025.11357662"
  },
  {
    id: "ded-melt-pool-icces-2024", type: "other", year: 2024,
    authors: "",
    title: "Single-Track Melt Pool Simulation in Robotic Laser-Directed Energy Deposition Under Speed Inaccuracy",
    venue: "ICCES 2024",
    details: "conference paper and presentation"
  },
  {
    id: "lpbf-drl-ureca-2023", type: "other", year: 2023,
    authors: "",
    title: "Melt Pool Depth Optimization of Laser Powder Bed Fusion 3D Printing via Deep Reinforcement Learning",
    venue: "Proceedings of the URECA@NTU 2022–23"
  }
];

/* ======================= no need to edit below ======================= */

(function () {
  const LABELS = { github: "GitHub", scholar: "Google Scholar", linkedin: "LinkedIn", orcid: "ORCID", researchgate: "ResearchGate" };
  const PREFIX = { journal: "J", conference: "C", other: "" };
  const EXTRA = { pdf: "PDF", code: "Code", video: "Video", project: "Project page" };

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Profile links: added after the e-mail link wherever a list is marked data-profile-links
  document.querySelectorAll("[data-profile-links]").forEach((list) => {
    Object.keys(LABELS).forEach((key) => {
      const url = (PROFILE.links[key] || "").trim();
      if (!url) return;
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = url; a.rel = "me noopener"; a.textContent = LABELS[key];
      li.appendChild(a); list.appendChild(li);
    });
  });

  // Photo: replaces the scan-track graphic on the home page
  const frame = document.querySelector("[data-portrait]");
  if (frame && PROFILE.photo.trim()) {
    const img = new Image();
    img.alt = "Portrait of Jungyeon Kim";
    img.onload = () => {
      frame.replaceChildren(img);
      const cap = frame.parentElement.querySelector("figcaption");
      if (cap) cap.remove();
    };
    img.src = PROFILE.photo.trim();
  }

  // Company and university logos: uses assets/logos/<name>.svg, .png or .jpg when the file exists
  document.querySelectorAll("[data-logo]").forEach((slot) => {
    const base = slot.getAttribute("data-logo");
    const types = [".svg", ".png", ".jpg"];
    (function attempt(i) {
      if (i >= types.length) return;
      const img = new Image();
      img.alt = "";
      img.onload = () => slot.replaceChildren(img);
      img.onerror = () => attempt(i + 1);
      img.src = base + types[i];
    })(0);
  });

  // Publications
  function item(pub, tag) {
    const authors = esc(pub.authors).replace(/Kim, J\.(†?)/g, "<strong>Kim, J.$1</strong>");
    const venue = "<em>" + esc(pub.venue) + "</em>" + (pub.details ? ", " + esc(pub.details) : "") + " (" + pub.year + ")";
    const more = [];
    if (pub.doi) more.push('<a href="https://doi.org/' + encodeURI(pub.doi) + '">doi.org/' + esc(pub.doi) + "</a>");
    Object.keys(EXTRA).forEach((key) => {
      const url = pub.links && (pub.links[key] || "").trim();
      if (url) more.push('<a href="' + esc(url) + '">' + EXTRA[key] + "</a>");
    });
    const doi = more.length ? '<p class="doi">' + more.join("") + "</p>" : "";
    const thumb = pub.image ? '<img class="thumb" src="' + esc(pub.image) + '" alt="Figure from the paper" loading="lazy">' : "";
    return '<li id="' + esc(pub.id) + '"' + (thumb ? ' class="has-thumb"' : "") + ">" +
      '<span class="tag">' + esc(tag) + "</span>" +
      "<div>" +
        '<p class="title">' + esc(pub.title) + "</p>" +
        (authors ? '<p class="authors">' + authors + "</p>" : "") +
        '<p class="venue">' + venue + "</p>" + doi +
      "</div>" + thumb + "</li>";
  }

  function tags(type) {
    const list = PUBLICATIONS.filter((p) => p.type === type);
    const map = {};
    list.forEach((p, i) => { map[p.id] = PREFIX[type] ? PREFIX[type] + (list.length - i) : String(p.year); });
    return map;
  }
  const TAGS = Object.assign({}, tags("journal"), tags("conference"), tags("other"));

  document.querySelectorAll("[data-pubs]").forEach((list) => {
    const want = list.getAttribute("data-pubs");
    const pubs = PUBLICATIONS.filter((p) => (want === "selected" ? p.selected : p.type === want));
    list.innerHTML = pubs.map((p) => item(p, TAGS[p.id])).join("");
  });

  document.querySelectorAll("[data-count]").forEach((el) => {
    el.textContent = PUBLICATIONS.filter((p) => p.type === el.getAttribute("data-count")).length;
  });

  // If the page was opened with a #paper link, scroll to it now that the list exists
  if (location.hash.length > 1) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView();
  }
})();
