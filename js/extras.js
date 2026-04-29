
function openPanel(type) {
  const overlay = document.getElementById("extras-panel");
  const title = document.getElementById("panel-title");
  const body = document.getElementById("panel-body");

  overlay.classList.add("show");
  body.innerHTML = "";

  /* ===== CLOAK ===== */
  if (type === "cloak") {
    title.textContent = "App Cloaking";

    body.innerHTML = `
      <p>Select an app icon style.</p>

      <div class="cloak-grid">
        <div class="cloak-option" onclick="setCloak('classroom')">
          <img src="/images/classroom.png">
        </div>

        <div class="cloak-option" onclick="setCloak('docs')">
          <img src="/images/docs.png">
        </div>

        <div class="cloak-option" onclick="setCloak('slides')">
          <img src="/images/slides.png">
        </div>

        <div class="cloak-option" onclick="setCloak('drive')">
          <img src="/images/drive.png">
        </div>
      </div>

      <button class="panel-reset" onclick="resetCloak()">Reset</button>
    `;
  }

  /* ===== LINKS ===== */
  if (type === "links") {
    title.textContent = "Links";

    body.innerHTML = `
      <button class="panel-btn">Add link here</button>
    `;
  }

  /* ===== CHANGELOG ===== */
  if (type === "changelog") {
    title.textContent = "Changelog";

    body.innerHTML = `
      <p>v1.0 - Initial release</p>
      <p>v1.1 - Cloaking system</p>
      <p>v1.2 - Extras panel added</p>
    `;
  }

  /* ===== CODE ===== */
  if (type === "code") {
    title.textContent = "Code Panel";

    body.innerHTML = `
      <input class="panel-input" id="codeInput" placeholder="Enter code...">
      <button class="panel-btn" onclick="submitCode()">Submit</button>
    `;
  }
}

function closePanel() {
  document.getElementById("extras-panel").classList.remove("show");
}

/* ===== CLOAK ===== */

function setCloak(type) {
  let name = "The Carey Network";
  let icon = "/images/icon.png";

  if (type === "classroom") {
    name = "Google Classroom";
    icon = "/images/classroom.png";
  }

  if (type === "docs") {
    name = "Google Docs";
    icon = "/images/docs.png";
  }

  if (type === "slides") {
    name = "Google Slides";
    icon = "/images/slides.png";
  }

  if (type === "drive") {
    name = "Google Drive";
    icon = "/images/drive.png";
  }

  localStorage.setItem("appName", name);
  localStorage.setItem("appIcon", icon);

  document.title = name;

  let link = document.querySelector("link[rel~='icon']");
  if (link) link.href = icon;

  alert("Saved. Re-add to home screen.");
}

function resetCloak() {
  localStorage.removeItem("appName");
  localStorage.removeItem("appIcon");

  document.title = "The Carey Network";

  let link = document.querySelector("link[rel~='icon']");
  if (link) link.href = "/images/icon.png";

  alert("Reset complete.");
}

/* ===== CODE ===== */

function submitCode() {
  const val = document.getElementById("codeInput").value;
  alert("Code: " + val);
}
