/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import api from "../../api";
const FormComponent = () => {
  const refugeeRef = useRef("");
  const hostBelongingRef = useRef("");
  const homeBelongingRef = useRef("");
  const hostAttachmentRef = useRef("");
  const homeAttachmentRef = useRef("");
  const homeMakingRef = useRef("");
  const hostMakingRef = useRef("");
  const highAgencyRef = useRef("");
  const lowAgencyRef = useRef("");
  const economicWellbeingRef = useRef(null);
  const politicalProcessRef = useRef(null);
  const socialCapitalRef = useRef(null);
  const culturalIntegrationRef = useRef(null);
  const economicIntegrationRef = useRef(null);
  const socialIntegrationRef = useRef(null);
  const transnationalismRef = useRef("");

  const [highAgencyDisabled, setHighAgencyDisabled] = useState(true);
  const [lowAgencyDisabled, setLowAgencyDisabled] = useState(true);

  const handleHighAgencyClick = () => {
    setLowAgencyDisabled(true);
    setHighAgencyDisabled(false);
  };

  const handleLowAgencyClick = () => {
    setHighAgencyDisabled(true);
    setLowAgencyDisabled(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const refugee = refugeeRef?.current?.value;
    const hostBelonging = hostBelongingRef?.current?.value;
    const homeBelonging = homeBelongingRef?.current?.value;
    const hostAttachment = hostAttachmentRef?.current?.value;
    const homeAttachment = homeAttachmentRef?.current?.value;
    const highAgency = highAgencyRef?.current?.value;
    const lowAgency = lowAgencyRef?.current?.value;
    const economicWellbeing = economicWellbeingRef?.current?.value;
    const politicalProcess = politicalProcessRef?.current?.value;
    const socialCapital = socialCapitalRef?.current?.value;
    const culturalIntegration = culturalIntegrationRef?.current?.value;
    const economicIntegration = economicIntegrationRef?.current?.value;
    const socialIntegration = socialIntegrationRef?.current?.value;
    const transnationalism = transnationalismRef?.current?.value;
    let formData = new FormData();
    if (refugee) {
      formData.append("refugee", refugee);
    }
    if (hostBelonging) {
      formData.append("hostBelonging", hostBelonging);
    }
    if (homeBelonging) {
      formData.append("homeBelonging", homeBelonging);
    }
    if (hostAttachment) {
      formData.append("hostAttachment", hostAttachment);
    }
    if (homeAttachment) {
      formData.append("homeAttachment", homeAttachment);
    }
    if (highAgency) {
      formData.append("highAgency", highAgency);
    }
    if (lowAgency) {
      formData.append("lowAgency", lowAgency);
    }
    if (economicWellbeing) {
      formData.append("economicWellbeing", economicWellbeing);
    }
    if (politicalProcess) {
      formData.append("politicalProcess", politicalProcess);
    }
    if (socialCapital) {
      formData.append("socialCapital", socialCapital);
    }
    if (culturalIntegration) {
      formData.append("culturalIntegration", culturalIntegration);
    }
    if (economicIntegration) {
      formData.append("economicIntegration", economicIntegration);
    }
    if (socialIntegration) {
      formData.append("socialIntegration", socialIntegration);
    }
    if (transnationalism) {
      formData.append("transnationalism", transnationalism);
    }

    try {
      api
        .post("user/add-instance/", formData)
        .then((response) => console.log(response));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main style={{ marginBottom: 100, marginTop: 50 }}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-md-10">
            <div className="card rounded-5">
              <div className="card-body p-4">
                <h3 className="text-center">Add New Instance</h3>
                <br />
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="pills-login"
                    role="tabpanel"
                    aria-labelledby="tab-login"
                  >
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="Full Name">
                          Refugee
                        </label>
                        <input
                          type="text"
                          name="refugee"
                          id="refugee"
                          className="form-control"
                          placeholder="Refugee Name"
                          ref={refugeeRef}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label htmlFor="belonging" className="form-label">
                          Belonging
                        </label>
                        <input
                          type="text"
                          name="hostBelonging"
                          id="hostBelonging"
                          className="form-control mb-3"
                          placeholder="Host Belonging"
                          ref={hostBelongingRef}
                        />
                        <input
                          type="text"
                          name="homeBelonging"
                          id="homeBelonging"
                          className="form-control"
                          placeholder="Home Belonging"
                          ref={homeBelongingRef}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label
                          htmlFor="attachment"
                          className="form-label header-sec"
                        >
                          Attachment
                        </label>
                        <input
                          type="text"
                          name="homeAttachment"
                          id="homeAttachment"
                          className="form-control mb-3"
                          placeholder="Home Attachment"
                          ref={homeAttachmentRef}
                        />
                        <input
                          type="text"
                          name="hostAttachment"
                          id="hostAttachment"
                          className="form-control"
                          placeholder="Host Attachment"
                          ref={hostAttachmentRef}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label
                          htmlFor="placeMaking"
                          className="form-label header-sec"
                        >
                          Place Making
                        </label>
                        <input
                          type="text"
                          name="homeMaking"
                          id="homeMaking"
                          className="form-control mb-3"
                          placeholder="Home Making"
                          ref={homeMakingRef}
                        />
                        <input
                          type="text"
                          name="hostMaking"
                          id="hostMaking"
                          className="form-control"
                          placeholder="Host Making"
                          ref={hostMakingRef}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label
                          htmlFor="refagency"
                          className="form-label header-sec"
                        >
                          Refugee Agency
                        </label>
                        <div style={{ marginLeft: "10px" }}>
                          <input
                            type="radio"
                            name="refagency"
                            id="highagency"
                            onClick={handleHighAgencyClick}
                          />
                          <label htmlFor="highagency" className="form-label">
                            High Agency
                          </label>
                          <div style={{ marginLeft: "25px" }}>
                            <input
                              type="text"
                              name="highagencyfield"
                              id="highagencyfield"
                              className="form-control mb-3"
                              placeholder="High Agency"
                              disabled={highAgencyDisabled}
                              ref={highAgencyRef}
                            />
                          </div>

                          <input
                            type="radio"
                            name="refagency"
                            id="lowagency"
                            onClick={handleLowAgencyClick}
                          />
                          <label htmlFor="lowagency" className="form-label">
                            Low Agency
                          </label>
                          <div style={{ marginLeft: "25px" }}>
                            <input
                              type="text"
                              name="lowagencyfield"
                              id="lowagencyfield"
                              className="form-control"
                              placeholder="Low Agency"
                              disabled={lowAgencyDisabled}
                              ref={lowAgencyRef}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label
                          htmlFor="reintegration"
                          className="form-label header-sec"
                        >
                          Reintegration
                        </label>
                        <div className="form-outline mb-4">
                          <label
                            htmlFor="economicwellbeing"
                            className="form-label header-sub-sec"
                          >
                            Economic Wellbeing
                          </label>
                          <div style={{ marginLeft: "10px" }}>
                            <input
                              type="radio"
                              name="economicWellbeing"
                              value="HighEconWellbeingInhome"
                              id="HighEconWellbeingInHome"
                              ref={economicWellbeingRef}
                            />

                            <label
                              htmlFor="HighEconWellbeingInHome"
                              className="form-label"
                            >
                              High Economic Wellbeing In Home
                            </label>
                            <br />
                            <input
                              type="radio"
                              name="economicWellbeing"
                              value="MediumEconWellbeingInhome"
                              id="MediumEconWellbeingInHome"
                              ref={economicWellbeingRef}
                            />
                            <label
                              htmlFor="MediumEconWellbeingInHome"
                              className="form-label"
                            >
                              Medium Econ Wellbeing In Home
                            </label>
                            <br />
                            <input
                              type="radio"
                              name="economicWellbeing"
                              value="LowEconWellbeingInhome"
                              id="LowEconWellbeingInHome"
                              ref={economicWellbeingRef}
                            />
                            <label
                              htmlFor="LowEconWellbeingInHome"
                              className="form-label"
                            >
                              Low Econ Wellbeing In Home
                            </label>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <label
                            htmlFor="politicalProcess"
                            className="form-label header-sub-sec"
                          >
                            Political Process
                          </label>
                          <div style={{ marginLeft: "10px" }}>
                            <input
                              type="radio"
                              name="politicalProcess"
                              value="StablePoliticalProcess"
                              id="StablePoliticalProcess"
                              ref={politicalProcessRef}
                            />
                            <label
                              htmlFor="StablePoliticalProcess"
                              className="form-label"
                            >
                              Stable Political Process
                            </label>
                            <br />
                            <input
                              type="radio"
                              name="politicalProcess"
                              value="UnstablePoliticalProcess"
                              id="UnstablePoliticalProcess"
                              ref={politicalProcessRef}
                            />
                            <label
                              htmlFor="UnstablePoliticalProcess"
                              className="form-label"
                            >
                              Unstable Political Process
                            </label>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <label
                            htmlFor="socialCapital"
                            className="form-label header-sub-sec"
                          >
                            Social Capital
                          </label>
                          <div style={{ marginLeft: "10px" }}>
                            <input
                              type="radio"
                              name="socialCapital"
                              value="GoodSocialCapitalInhome"
                              id="GoodSocialCapitalInhome"
                              ref={socialCapitalRef}
                            />
                            <label
                              htmlFor="GoodSocialCapitalInhome"
                              className="form-label"
                            >
                              Good Social Capital In Home
                            </label>
                            <br />
                            <input
                              type="radio"
                              name="socialCapital"
                              value="MediumSocialcapitalInHome"
                              id="MediumSocialcapitalInHome"
                              ref={socialCapitalRef}
                            />
                            <label
                              htmlFor="MediumSocialcapitalInHome"
                              className="form-label"
                            >
                              Medium Social Capital In Home
                            </label>
                            <br />
                            <input
                              type="radio"
                              name="socialCapital"
                              value="BadSocialCapitalInHome"
                              id="BadSocialCapitalInHome"
                              ref={socialCapitalRef}
                            />
                            <label
                              htmlFor="BadSocialCapitalInHome"
                              className="form-label"
                            >
                              Bad Social Capital In Home
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label header-sec">
                          Integration:
                        </label>
                        <br />
                        <div className="form-outline mb-4">
                          <div className="form-outline mb-4">
                            <label
                              htmlFor="culturalIntegration"
                              className="form-label header-sub-sec"
                            >
                              Cultural Integration
                            </label>
                            <div style={{ marginLeft: "10px" }}>
                              <input
                                type="radio"
                                name="culturalIntegration"
                                value="HighCulturalIntegration"
                                id="HighCulturalIntegration"
                                ref={culturalIntegrationRef}
                              />
                              <label
                                htmlFor="HighCulturalIntegration"
                                className="form-label"
                              >
                                High Cultural Integration
                              </label>
                              <br />
                              <input
                                type="radio"
                                name="culturalIntegration"
                                value="MediumCulturalIntegration"
                                id="MediumCulturalIntegration"
                                ref={culturalIntegrationRef}
                              />
                              <label
                                htmlFor="MediumCulturalIntegration"
                                className="form-label"
                              >
                                Medium Cultural Integration
                              </label>
                              <br />
                              <input
                                type="radio"
                                name="culturalIntegration"
                                value="LowCulturalIntegration"
                                id="LowCulturalIntegration"
                                ref={culturalIntegrationRef}
                              />
                              <label
                                htmlFor="LowCulturalIntegration"
                                className="form-label"
                              >
                                Low Cultural Integration
                              </label>
                            </div>
                          </div>

                          <div className="form-outline mb-4">
                            <label
                              htmlFor="economicIntegration"
                              className="form-label header-sub-sec"
                            >
                              Economic Integration
                            </label>
                            <div style={{ marginLeft: "10px" }}>
                              <input
                                type="radio"
                                name="economicIntegration"
                                value="HighEconIntegration"
                                id="HighEconIntegration"
                                ref={economicIntegrationRef}
                              />
                              <label
                                htmlFor="HighEconIntegration"
                                className="form-label"
                              >
                                High Econ Integration
                              </label>
                              <br />
                              <input
                                type="radio"
                                name="economicIntegration"
                                value="MediumEconIntegration"
                                id="MediumEconIntegration"
                                ref={economicIntegrationRef}
                              />
                              <label
                                htmlFor="MediumEconIntegration"
                                className="form-label"
                              >
                                Medium Econ Integration
                              </label>
                              <br />
                              <input
                                type="radio"
                                name="economicIntegration"
                                id="LowEconIntegration"
                                ref={economicIntegrationRef}
                              />
                              <label
                                htmlFor="LowEconIntegration"
                                className="form-label"
                              >
                                Low Econ Integration
                              </label>
                            </div>
                          </div>

                          <div className="form-outline mb-4">
                            <label
                              htmlFor="socialIntegration"
                              className="form-label header-sub-sec"
                            >
                              Social Integration
                            </label>
                            <div style={{ marginLeft: "10px" }}>
                              <input
                                type="radio"
                                name="socialIntegration"
                                value="HighSocioIntegration"
                                id="HighSocioIntegration"
                                ref={socialIntegrationRef}
                              />
                              <label
                                htmlFor="HighSocioIntegration"
                                className="form-label"
                              >
                                High Socio Integration
                              </label>
                              <br />
                              <input
                                type="radio"
                                name="socialIntegration"
                                value="MediumSocioIntegration"
                                id="MediumSocioIntegration"
                                ref={socialIntegrationRef}
                              />
                              <label
                                htmlFor="MediumSocioIntegration"
                                className="form-label"
                              >
                                Medium Socio Integration
                              </label>
                              <br />
                              <input
                                type="radio"
                                name="socialIntegration"
                                value="LowSocioIntegration"
                                id="LowSocioIntegration"
                                ref={socialIntegrationRef}
                              />
                              <label
                                htmlFor="LowSocioIntegration"
                                className="form-label"
                              >
                                Low Socio Integration
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label
                          htmlFor="transnationalism"
                          className="form-label header-sec"
                        >
                          Transnationalism
                        </label>
                        <input
                          type="text"
                          name="transnationalism"
                          id="transnationalism"
                          className="form-control"
                          placeholder="Transnationalism"
                          ref={transnationalismRef}
                        />
                      </div>

                      <div className="mb-5 submit-query">
                        <input
                          type="submit"
                          value="ADD"
                          className="btn submit-btn m-2 col-5"
                        />
                        <input
                          type="reset"
                          value="RESET"
                          className="btn reset-btn col-2"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FormComponent;
