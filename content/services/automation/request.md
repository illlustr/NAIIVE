---
weight: 3
title: Request
type: docs
prev: services/automation/predefined
next: services/automation/workflow
---

<br>

<details class="inline-flex items-center rounded-lg gap-2 px-3 py-1 text-gray-600 dark:text-gray-400 bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800 border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600 transition-all ease-in duration-200">
    <summary><b>Terms and Conditions</b></summary>
    <p>By submitting this form, you agree to the following terms and conditions:
    <ul>
        <li>You agree to provide accurate and truthful information in this form.</li>
        <li>You understand that the information you provide will be used to process your service request.</li>
        <li>You agree to our <a href="http://naiive.web.app/information/legal/privacy_policy/">privacy policy</a>
 and how your data will be handled.</li>
        <li>You understand that the submission of this form does not guarantee the provision of services and is subject to review.</li>
    </ul>
    <p>Please review our full terms and conditions and privacy policy on our website for more details. If you have any questions or concerns, please contact our customer support.</p>
</details>

<br>

<form method="post" action="https://forms.un-static.com/forms/52271846cf4b54917da930b7448e48dbd8178d1d">
  <br>
  <label for="name" class="text-gray-600 dark:text-gray-400"><b>* Name</b></label>
  <input type="text" id="name" name="name" required class="shadow-sm rounded-lg block w-full p-1.5 text-gray-600 dark:text-gray-400 bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800 border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600 transition-all ease-in duration-200;">
  <br>
  <label for="email" class="text-gray-600 dark:text-gray-400"><b>* Email</b></label>
  <input type="email" id="email" name="email" required class="mx-auto shadow-sm rounded-lg block w-full p-1.5 text-gray-600 dark:text-gray-400 bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800 border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600 transition-all ease-in duration-200;">
  <br>
  <label for="task" class="text-gray-600 dark:text-gray-400"><b>* Task / Goals / Objectives</b></label>
  <textarea id="task" name="task" rows="4" required class="mx-auto shadow-sm rounded-lg block w-full p-1.5 text-gray-600 dark:text-gray-400 bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800 border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600 transition-all ease-in duration-200;"></textarea>
  <br>
  <label for="preferences" class="text-gray-600 dark:text-gray-400"><b>Preferences</b></label>
  <div class="mx-auto w-full gap-2">
    <input type="checkbox" id="script" name="script">
    <label for="script" class="text-gray-600 dark:text-gray-400">I'm familiar with script</label>
    <br>
    <input type="checkbox" id="terminal" name="terminal">
    <label for="terminal" class="text-gray-600 dark:text-gray-400">I'm familiar with Command Line</label>
  </div>
  <br>
  <div class="flex mx-auto w-full gap-2">
    <div class="mx-auto w-full">
      <label for="budget" class="text-gray-600 dark:text-gray-400"><b>Budget (USD)</b></label>
      <input type="number" id="budget" name="budget" placeholder="4" min="4" class="mx-auto shadow-sm rounded-lg block w-full p-1.5 text-gray-600 dark:text-gray-400 bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800 border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600 transition-all ease-in duration-200;">
    </div>
    <div class="mx-auto w-full">
      <label for="completion-date" class="text-gray-600 dark:text-gray-400"><b>Expected Completion Date</b></label>
      <input type="date" id="completion-date" name="completion-date" class="shadow-sm rounded-lg block w-full p-1.5 text-gray-600 dark:text-gray-400 bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800 border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600 transition-all ease-in duration-200;">
    </div>
  </div>
  <br>
  <label for="comments" class="text-gray-600 dark:text-gray-400"><b>Additional Comments</b></label>
  <textarea id="comments" name="comments" rows="4" class="mx-auto shadow-sm rounded-lg block w-full p-1.5 text-gray-600 dark:text-gray-400 bg-gray-400 dark:bg-neutral-800 dark:border-neutral-800 border hover:border-gray-400 dark:hover:text-gray-400 dark:hover:border-gray-600 transition-all ease-in duration-200;"></textarea>
  <br>
  <div class="text-center">
    <input type="checkbox" id="terms" name="terms" required>
    <label for="terms" class="text-gray-600 dark:text-gray-400"><b>I have read and agree to the terms and conditions.</b></label>
    <br>
    <br>
    <div class="g-recaptcha" data-sitekey="6LcxLrAoAAAAAF2mIoTAJjUutoTM-I-UyQWeAmT-" data-callback="recaptchaCallback" style="margin:auto; max-width:305px; display: none;"></div>
    <br>
    <input type="submit" id="submit" value="Submit Automation Request" class="btn btn-default hidden font-medium cursor-pointer px-4 py-2 rounded-lg text-center text-white inline-block bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-all ease-in duration-200">
  </div>
</form>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<script>
  document.getElementById("terms").addEventListener("change", function () {
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

- ( * ) Require
