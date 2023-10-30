---
weight: 3
title: Request
type: docs
prev: services/application/predefined
next: services/application/qna
---

{{< callout type="info" >}}
  If you wish to confirm whether your request can be fulfilled before filling out this form, please contact our [**support team**](mailto:naiive@email.com) or initiate a [**discussion**](https://github.com/orgs/naiiveprojects/discussions).
{{< /callout >}}

<br>

<details class="inline-flex items-center rounded-lg gap-2 px-3 py-1
text-gray-600 dark:text-gray-400 bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800
border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600
transition-all ease-in duration-200"
>
  <summary><b>Terms and Conditions</b></summary>
    <p>By submitting this form, you agree to the following terms and conditions:
    <ul>
        <li>You agree to provide accurate and truthful information in this form.</li>
        <li>You understand that the information you provide will be used to process your service request.</li>
        <li>You agree to our <a href="./../../../information/legal/privacy_policy" target="_blank" rel="noopener noreferrer"><b>privacy policy</b></a> and how your data will be handled.</li>
        <li>You understand that the submission of this form does not guarantee the provision of services and is subject to review.</li>
    </ul>
    <p>Please review our full <a href="./../../../information/legal/term_and_condition" target="_blank" rel="noopener noreferrer"><b>terms and conditions</b></a> and <a href="./../../../information/legal/privacy_policy" target="_blank" rel="noopener noreferrer"><b>privacy policy</b></a> on our website for more details. If you have any questions or concerns, please contact our <a href="mailto:naiive@email.com" target="_blank" rel="noopener noreferrer"><b>support team</b></a> or initiate a <a href="https://github.com/orgs/naiiveprojects/discussions" target="_blank" rel="noopener noreferrer"><b>discussion</b></a>.</p><br>
</details>

<form method="post" action="https://forms.un-static.com/forms/39f4424e9df34efb6c37ec44be5c0b8127fa1680">
    <br> <!-- Contact Information -->
    <label for="name">
    <b>* Name</b>
    </label>
    <input
    required
    type="text"
    id="name"
    name="name"
    class="shadow-sm rounded-lg block w-full p-2
    bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800
    border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600
    transition-all ease-in duration-200;"
    >
    <br>
    <label for="email">
    <b>* Email</b>
    </label>
    <input
    required
    type="email"
    id="email"
    name="email"
    minlenght="10"
    class="mx-auto shadow-sm rounded-lg block w-full p-2
    bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800
    border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600
    transition-all ease-in duration-200;"
    >
    <br>
    <label for="company" class="text-gray-600 dark:text-gray-400">
    <b>Company Name</b>
    </label>
    <input
    required
    type="text"
    id="company"
    name="company"
    placeholder="additional"
    class="shadow-sm rounded-lg block w-full p-2
    bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800
    border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600
    transition-all ease-in duration-200;"
    >
    <br> <!-- project -->
    <label for="project_name" class="text-gray-600 dark:text-gray-400">
    <b>Project Name</b>
    </label>
    <input
    type="text"
    id="project_name"
    name="project_name"
    placeholder="additional"
    class="shadow-sm rounded-lg block w-full p-2
    bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800
    border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600
    transition-all ease-in duration-200;"
    >
    <br>
    <label for="project_overview">
    <b>* Project Overview</b>
    </label>
    <textarea
    required
    id="project_overview"
    name="project_overview"
    rows="3"
    placeholder="▼ example
    Mobile application for Image generator & manipulator featuring latest AI technology"
    class="mx-auto shadow-sm rounded-lg block w-full p-2
    bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800
    border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600
    transition-all ease-in duration-200;"
    ></textarea>
    <br> <!-- Project Goals and Objectives -->
    <label for="project_goal">
    <b>* Project Goals and Objectives</b>
    </label>
    <textarea
    required
    id="project_goal"
    name="project_goal"
    rows="3"
    placeholder="▼ example
    generate or manipulate image using text, sketch, or external image"
    class="mx-auto shadow-sm rounded-lg block w-full p-2
    bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800
    border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600
    transition-all ease-in duration-200;"
    ></textarea>
    <br> <!-- Features and Functionality -->
    <label for="project_features">
    <b>* Project Features and Functionality</b>
    </label>
    <textarea
    required
    id="project_features"
    name="project_features"
    rows="8"
    placeholder="▼ example
    * must have
      - Gallery, where all generated image stored
      - Discovery, where user can copy other users configuration to generate image
    * nice to have
      - Text Translation like google translate
      - Announcement feature that sync with internet"
    class="mx-auto shadow-sm rounded-lg block w-full p-2
    bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800
    border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600
    transition-all ease-in duration-200;"
    ></textarea>
    <br>
    <div class="flex mx-auto w-full gap-2">
      <div class="mx-auto w-full">
        <label for="development_platform">
        <b>* Development Platform</b>
        </label>
        <select
        required
        id="development_platform"
        name="development_platform"
        class="mx-auto shadow-sm rounded-lg block w-full p-2
        bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800
        border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600
        transition-all ease-in duration-200;"
        >
          <option value="Windows">Windows</option>
          <option value="MacOS">MacOS</option>
          <option value="Linux">Linux</option>
          <option value="Android">Android / Chromebook</option>
        </select>
      </div>
      <div class="mx-auto w-full">
        <label for="initial_platform">
        <b>* Base Target Platform</b>
        </label>
        <select
        required
        id="initial_platform"
        name="initial_platform"
        class="mx-auto shadow-sm rounded-lg block w-full p-2
        bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800
        border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600
        transition-all ease-in duration-200;"
        >
          <option value="Windows">Windows</option>
          <option value="MacOS">MacOS</option>
          <option value="Linux">Linux</option>
          <option value="PWA">Web (PWA)</option>
          <option value="Chromebook">Chromebook</option>
          <option value="Android">Android</option>
          <option value="IOS">IOS</option>
          <option value="AR">Augmented Reality</option>
          <option value="VR">Virtual Reality</option>
        </select>
      </div>
    </div>
    <br> <!-- Check boxes | target_platforms -->
    <label for="target_platforms">
    <b>* Target Platforms</b>
    </label>
    <div class="flex mx-auto w-full gap-2">
      <div class="mx-auto w-full gap-2">
        <input type="checkbox" id="target-windows" name="target-windows">
        <label for="target-windows" class="text-gray-600 dark:text-gray-400">Windows</label>
        <br>
        <input type="checkbox" id="target-MacOS" name="target-MacOS">
        <label for="target-MacOS" class="text-gray-600 dark:text-gray-400">MacOS</label>
        <br>
        <input type="checkbox" id="target-Linux" name="target-Linux">
        <label for="target-Linux" class="text-gray-600 dark:text-gray-400">Linux</label>
        <br>
        <input type="checkbox" id="target-Chromebook" name="target-Chromebook">
        <label for="target-Chromebook" class="text-gray-600 dark:text-gray-400">Chromebook</label>
        <br>
        <input type="checkbox" id="target-Android" name="target-Android">
        <label for="target-Android" class="text-gray-600 dark:text-gray-400">Android</label>
        <br>
        <input type="checkbox" id="target-IOS" name="target-IOS">
        <label for="target-IOS" class="text-gray-600 dark:text-gray-400">IOS</label>
      </div>
      <div class="mx-auto w-full gap-2">
        <input type="checkbox" id="target-Web" name="target-Web">
        <label for="target-Web" class="text-gray-600 dark:text-gray-400">Web (PWA)</label>
        <br>
        <input type="checkbox" id="target-AR" name="target-AR">
        <label for="target-AR" class="text-gray-600 dark:text-gray-400">Augmented Reality</label>
        <br>
        <input type="checkbox" id="target-VR" name="target-VR">
        <label for="target-VR" class="text-gray-600 dark:text-gray-400">Virtual Reality</label>
        <br>
        <input type="checkbox" id="target-Switch" name="target-Switch">
        <label for="target-Switch" class="text-gray-600 dark:text-gray-400">Nintendo Switch</label>
        <br>
        <input type="checkbox" id="target-Playstation" name="target-Playstation">
        <label for="target-Playstation" class="text-gray-600 dark:text-gray-400">Playstation</label>
        <br>
        <input type="checkbox" id="target-XBox" name="target-XBox">
        <label for="target-XBox" class="text-gray-600 dark:text-gray-400">XBox</label>
      </div>
    </div>
    <br>
    <div class="flex mx-auto w-full gap-2">
      <div class="mx-auto w-full">
        <label for="maintenace">
        <b>* Maintenance and Support</b>
        </label>
        <select
        required
        id="maintenace"
        name="maintenace"
        class="mx-auto shadow-sm rounded-lg block w-full p-2
        bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800
        border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600
        transition-all ease-in duration-200;"
        >
          <option value="None">None</option>
          <option value="Partial">Partial</option>
          <option value="Full">Full</option>
        </select>
      </div>
      <div class="mx-auto w-full">
        <!-- Spin boxes | budget -->
        <label for="budget" class="text-gray-600 dark:text-gray-400">
        <b>Budget (USD)</b>
        </label>
        <input
        type="number"
        id="budget"
        name="budget"
        placeholder="20"
        min="20"
        class="mx-auto shadow-sm rounded-lg block w-full p-2
        bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800
        border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600
        transition-all ease-in duration-200;"
        >
      </div>
    </div>
    <br>
    <div class="flex mx-auto w-full gap-2">
      <div class="mx-auto w-full">
        <!-- date -->
        <label for="completion-date" class="text-gray-600 dark:text-gray-400">
        <b>Expected Completion Date</b>
        </label>
        <input
        type="date"
        id="completion-date"
        name="completion-date"
        class="shadow-sm rounded-lg block w-full p-2
        bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800
        border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600
        transition-all ease-in duration-200;"
        >
      </div>
      <div class="mx-auto w-full">
        <label for="file_attachments" class="text-gray-600 dark:text-gray-400">
        <b>Attach Files (if any)</b>
        </label>
        <input
        multiple
        type="file"
        id="file_attachments"
        name="file_attachments"
        class="mx-auto shadow-sm rounded-lg block w-full p-2
        bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800
        border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600
        transition-all ease-in duration-200;"
        >
      </div>
    </div>
    <br> <!-- comments -->
    <label for="comments" class="text-gray-600 dark:text-gray-400">
    <b>Additional Comments</b>
    </label>
    <textarea
    id="comments"
    name="comments"
    rows="3"
    class="mx-auto shadow-sm rounded-lg block w-full p-2
    bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800
    border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600
    transition-all ease-in duration-200;"
    ></textarea>
    <br>
    <div class="text-center">
      <label for="agree_terms">
        <input type="checkbox" id="agree_terms" name="agree_terms" required>
        I agree to the <b>Terms and Conditions</b>
      </label>
      <br>
      <br>
      <div
      class="g-recaptcha"
      data-sitekey="6LcxLrAoAAAAAF2mIoTAJjUutoTM-I-UyQWeAmT-"
      data-callback="recaptchaCallback"
      style="margin:auto; max-width:305px; display: none;"
      ></div>
      <br>
      <input
      type="submit"
      id="submit"
      value="Submit Application Request ▷"
      class="btn btn-default hidden font-medium cursor-pointer px-4 py-1.5 rounded-lg text-center text-white inline-block
      bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300
      dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800
      transition-all ease-in duration-200"
      >
    </div>
</form>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<script>
  document.getElementById("agree_terms").addEventListener("change", function () {
    var recaptcha = document.querySelector(".g-recaptcha");
    if (this.checked) {
      recaptcha.style.display = "block";
    } else {
      recaptcha.style.display = "none";
    }
  });
  function recaptchaCallback() {
      var btnSubmit = document.getElementById("submit");
      if ( btnSubmit.classList.contains("hidden") ) {
          btnSubmit.classList.remove("hidden");
          btnSubmitclassList.add("show");
      }
  }
</script>

<br>

---

- **( * )**: Required
- **Development Platform**: to ensure compatibility of the technology is available for your platform.
- **Base Target Platform**: the main platform for testing during the development process.
- **Maintenance and Support**: this applies after the project is completed.
  - **None**: We will not involved in maintenance and support.
  - **Partial**: We will provide partial maintenance and support. (No routine)
  - **Full**: We will provide full maintenance and support.
