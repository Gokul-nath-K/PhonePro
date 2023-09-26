import React from "react";

const FAQ = () => {
  return (
    <>
        <div className="container-fluid bg-body-secondary" style={{ height : "100%"}}>
          <div className="bg-body-secondary" style={{ paddingTop: "7%", paddingBottom : "6%" }}>
            <div className="row p-3">
              <div className="col"></div>
              <div className="col d-flex justify-content-center">
                <p className="h3">PRODUCT SUPPORT</p>
              </div>
              <div className="col"></div>
            </div>
            <div className="row p-2">
              <div className="col"></div>
              <div className="col d-flex justify-content-center">
                <p className="h3">FAQ</p>
              </div>
              <div className="col"></div>
            </div>
            <div className="row pt-4">
              <div className="col-2"></div>
              <div className="col-8">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        How do I add a new contact?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <strong></strong>{" "}
                        To add a new contact, simply tap the "Add Contact" button and fill in the required information, such as name, phone number, and email address.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingfour">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >
                        How can I import my existing contacts into the app?
                      </button>
                    </h2>
                    <div
                      id="collapsefour"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingfour"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                      You can import contacts from your device's contacts list by going to the app's settings and selecting "Import Contacts." Follow the on-screen instructions to complete the process.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingfive">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefive"
                        aria-expanded="false"
                        aria-controls="collapsefive"
                      >
                        How do I edit or delete a contact?
                      </button>
                    </h2>
                    <div
                      id="collapsefive"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingfive"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                      To edit a contact, open the contact's profile and tap the "Edit" button. To delete a contact, open the contact's profile and tap the "Delete" or "Remove" option.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Is my contact data secure?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                      Yes, we take your data security seriously. Your contact information is encrypted and stored securely. We do not share your data with third parties.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Can I merge duplicate contacts?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                      Yes, you can merge duplicate contacts easily by selecting the duplicate entries and choosing the "Merge" option.                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
    </>
  );
};

export default FAQ;
