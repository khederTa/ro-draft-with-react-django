/* eslint-disable no-unused-vars */
import { useState } from "react";
import QueryTable from "../queryTable/QueryTable";
import api from "../../api";
const QueryForm = () => {
  const [formData, setFormData] = useState({
    homeBelonging: false,
    hostBelonging: false,
    hasAgency: "",
    economicWellbeing: "",
    politicalProcess: "",
    socialCapital: "",
    culturalIntegration: "",
    economicIntegration: "",
    socialIntegration: "",
    homeAttachment: false,
    hostAttachment: false,
    homeMaking: false,
    hostMaking: false,
    transnationalism: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Your form submission logic here
    // try {
    //   api
    //     .post("user/make-query/", formData)
    //     .then((response) => console.log(response));
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <main style={{ marginBottom: 100, marginTop: 50 }}>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-xl-7 col-md-10">
            <div className="card rounded-5">
              <div className="card-body p-4">
                <h3 className="text-center">Query Form</h3>
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <label className="form-label">Refugee Belongs To:</label>
                    <div style={{ margin: "10px" }}>
                      <input
                        type="checkbox"
                        name="homeBelonging"
                        id="homeBelonging"
                        checked={formData.homeBelonging}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            homeBelonging: e.target.checked,
                          })
                        }
                      />
                      <label className="form-label" htmlFor="homeBelonging">
                        Home Belonging
                      </label>
                      <br />
                      <input
                        type="checkbox"
                        name="hostBelonging"
                        id="hostBelonging"
                        checked={formData.hostBelonging}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            hostBelonging: e.target.checked,
                          })
                        }
                      />
                      <label className="form-label" htmlFor="hostBelonging">
                        Host Belonging
                      </label>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label">Refugee Has Agency:</label>
                    <div style={{ margin: "10px" }}>
                      {/* Radio buttons for Refugee Has Agency */}
                      <input
                        type="radio"
                        id="highAgency"
                        name="hasAgency"
                        value="HighAgency"
                        checked={formData.hasAgency === "HighAgency"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            hasAgency: e.target.value,
                          })
                        }
                      />
                      <label className="form-label" htmlFor="highAgency">
                        High Agency
                      </label>
                      <br />

                      <input
                        type="radio"
                        id="lowAgency"
                        name="hasAgency"
                        value="LowAgency"
                        checked={formData.hasAgency === "LowAgency"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            hasAgency: e.target.value,
                          })
                        }
                      />
                      <label className="form-label" htmlFor="lowAgency">
                        Low Agency
                      </label>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label">
                      Refugee Has Expected Level Of Reintegration:
                    </label>
                    <div style={{ margin: "10px" }}>
                      {/* Checkboxes and radio buttons for Refugee Has Expected Level Of Reintegration */}
                      <div>
                        <label
                          className="form-label"
                          htmlFor="economicWellbeing"
                        >
                          Economic Wellbeing
                        </label>
                        <div style={{ marginLeft: "10px" }}>
                          <input
                            type="radio"
                            name="economicWellbeing"
                            value="High Econ Wellbeing Inhome"
                            id="HighEconWellbeingInHome"
                            checked={
                              formData.economicWellbeing ===
                              "High Econ Wellbeing Inhome"
                            }
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                economicWellbeing: e.target.value,
                              })
                            }
                          />
                          <label
                            className="form-label"
                            htmlFor="HighEconWellbeingInHome"
                          >
                            High Economic Wellbeing In Home
                          </label>
                          <br />

                          <input
                            type="radio"
                            name="economicWellbeing"
                            value="Medium Econ Wellbeing Inhome"
                            id="MediumEconWellbeingInHome"
                            checked={
                              formData.economicWellbeing ===
                              "Medium Econ Wellbeing Inhome"
                            }
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                economicWellbeing: e.target.value,
                              })
                            }
                          />
                          <label
                            className="form-label"
                            htmlFor="MediumEconWellbeingInHome"
                          >
                            Medium Econ Wellbeing In Home
                          </label>
                          <br />

                          <input
                            type="radio"
                            name="economicWellbeing"
                            value="Low Econ Wellbeing Inhome"
                            id="LowEconWellbeingInHome"
                            checked={
                              formData.economicWellbeing ===
                              "Low Econ Wellbeing Inhome"
                            }
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                economicWellbeing: e.target.value,
                              })
                            }
                          />
                          <label
                            className="form-label"
                            htmlFor="LowEconWellbeingInHome"
                          >
                            Low Econ Wellbeing Inhome
                          </label>
                        </div>
                      </div>
                      <div>
                        <label
                          className="form-label"
                          htmlFor="politicalProcess"
                        >
                          Political Process
                        </label>
                        <div style={{ margin: "10px" }}>
                          <input
                            type="radio"
                            name="politicalProcess"
                            value="Stable Political Process"
                            id="StablePoliticalProcess"
                            checked={
                              formData.politicalProcess ===
                              "Stable Political Process"
                            }
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                politicalProcess: e.target.value,
                              })
                            }
                          />
                          <label
                            className="form-label"
                            htmlFor="StablePoliticalProcess"
                          >
                            Stable Political Process
                          </label>
                          <br />
                          <input
                            type="radio"
                            name="politicalProcess"
                            value="Unstable Political Process"
                            id="UnstablePoliticalProcess"
                            checked={
                              formData.politicalProcess ===
                              "Unstable Political Process"
                            }
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                politicalProcess: e.target.value,
                              })
                            }
                          />
                          <label
                            className="form-label"
                            htmlFor="UnstablePoliticalProcess"
                          >
                            Unstable Political Process
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className="form-label" htmlFor="socialCapital">
                          Social Capital
                        </label>
                        <div style={{ margin: "10px" }}>
                          <input
                            type="radio"
                            name="socialCapital"
                            value="Good Social Capital Inhome"
                            id="GoodSocialCapitalInhome"
                            checked={
                              formData.socialCapital ===
                              "Good Social Capital Inhome"
                            }
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                socialCapital: e.target.value,
                              })
                            }
                          />
                          <label
                            className="form-label"
                            htmlFor="GoodSocialCapitalInhome"
                          >
                            Good Social Capital In Home
                          </label>
                          <br />
                          <input
                            type="radio"
                            name="socialCapital"
                            value="Medium Socialcapital In Home"
                            id="MediumSocialcapitalInHome"
                            checked={
                              formData.socialCapital ===
                              "Medium Socialcapital In Home"
                            }
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                socialCapital: e.target.value,
                              })
                            }
                          />
                          <label
                            className="form-label"
                            htmlFor="MediumSocialcapitalInHome"
                          >
                            Medium Socialcapital In Home
                          </label>
                          <br />
                          <input
                            type="radio"
                            name="socialCapital"
                            value="Bad Social Capital In Home"
                            id="BadSocialCapitalInHome"
                            checked={
                              formData.socialCapital ===
                              "Bad Social Capital In Home"
                            }
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                socialCapital: e.target.value,
                              })
                            }
                          />
                          <label
                            className="form-label"
                            htmlFor="BadSocialCapitalInHome"
                          >
                            Bad Social Capital In Home
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label">
                      Refugee Has Level Of Integration:
                    </label>
                    <br />
                    {/* Checkboxes and radio buttons for Refugee Has Level Of Integration */}
                    <div style={{ margin: "10px" }}>
                      <label
                        className="form-label"
                        htmlFor="culturalIntegration"
                      >
                        Cultural Integration
                      </label>
                      <div style={{ marginLeft: "10px" }}>
                        <input
                          type="radio"
                          name="culturalIntegration"
                          value="High Cultural Integration"
                          id="HighCulturalIntegration"
                          checked={
                            formData.culturalIntegration ===
                            "High Cultural Integration"
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              culturalIntegration: e.target.value,
                            })
                          }
                        />
                        <label
                          className="form-label"
                          htmlFor="HighCulturalIntegration"
                        >
                          High Cultural Integration
                        </label>
                        <br />

                        <input
                          type="radio"
                          name="culturalIntegration"
                          value="Medium Cultural Integration"
                          id="MediumCulturalIntegration"
                          checked={
                            formData.culturalIntegration ===
                            "Medium Cultural Integration"
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              culturalIntegration: e.target.value,
                            })
                          }
                        />
                        <label
                          className="form-label"
                          htmlFor="MediumCulturalIntegration"
                        >
                          Medium Cultural Integration
                        </label>
                        <br />

                        <input
                          type="radio"
                          name="culturalIntegration"
                          value="Low Cultural Integration"
                          id="LowCulturalIntegration"
                          checked={
                            formData.culturalIntegration ===
                            "Low Cultural Integration"
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              culturalIntegration: e.target.value,
                            })
                          }
                        />
                        <label
                          className="form-label"
                          htmlFor="LowCulturalIntegration"
                        >
                          Low Cultural Integration
                        </label>
                      </div>
                      {/* Repeat similar logic for Economic Integration and Social Integration */}
                    </div>
                    <div style={{ margin: "10px" }}>
                      <label
                        className="form-label"
                        htmlFor="economicIntegration"
                      >
                        Economic Integration
                      </label>
                      <div style={{ marginLeft: "10px" }}>
                        <input
                          type="radio"
                          name="economicIntegration"
                          value="High Econ Integration"
                          id="HighEconIntegration"
                          checked={
                            formData.economicIntegration ===
                            "High Econ Integration"
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              economicIntegration: e.target.value,
                            })
                          }
                        />
                        <label
                          className="form-label"
                          htmlFor="HighEconIntegration"
                        >
                          High Econ Integration
                        </label>
                        <br />

                        <input
                          type="radio"
                          name="economicIntegration"
                          value="Medium Econ Integration"
                          id="MediumEconIntegration"
                          checked={
                            formData.economicIntegration ===
                            "Medium Econ Integration"
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              economicIntegration: e.target.value,
                            })
                          }
                        />
                        <label
                          className="form-label"
                          htmlFor="MediumEconIntegration"
                        >
                          Medium Econ Integration
                        </label>
                        <br />

                        <input
                          type="radio"
                          name="economicIntegration"
                          value="Low Econ Integration"
                          id="LowEconIntegration"
                          checked={
                            formData.economicIntegration ===
                            "Low Econ Integration"
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              economicIntegration: e.target.value,
                            })
                          }
                        />
                        <label
                          className="form-label"
                          htmlFor="LowEconIntegration"
                        >
                          Low Econ Integration
                        </label>
                      </div>
                    </div>
                    <div style={{ margin: "10px" }}>
                      <label className="form-label" htmlFor="socialIntegration">
                        Social Integration
                      </label>
                      <div style={{ marginLeft: "10px" }}>
                        <input
                          type="radio"
                          name="socialIntegration"
                          value="High Socio Integration"
                          id="HighSocioIntegration"
                          checked={
                            formData.socialIntegration ===
                            "High Socio Integration"
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              socialIntegration: e.target.value,
                            })
                          }
                        />
                        <label
                          className="form-label"
                          htmlFor="HighSocioIntegration"
                        >
                          High Socio Integration
                        </label>
                        <br />

                        <input
                          type="radio"
                          name="socialIntegration"
                          value="Medium Socio Integration"
                          id="MediumSocioIntegration"
                          checked={
                            formData.socialIntegration ===
                            "Medium Socio Integration"
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              socialIntegration: e.target.value,
                            })
                          }
                        />
                        <label
                          className="form-label"
                          htmlFor="MediumSocioIntegration"
                        >
                          Medium Socio Integration
                        </label>
                        <br />

                        <input
                          type="radio"
                          name="socialIntegration"
                          value="Low Socio Integration"
                          id="LowSocioIntegration"
                          checked={
                            formData.socialIntegration ===
                            "Low Socio Integration"
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              socialIntegration: e.target.value,
                            })
                          }
                        />
                        <label
                          className="form-label"
                          htmlFor="LowSocioIntegration"
                        >
                          Low Socio Integration
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label">
                      Refugee Is Attached To:
                    </label>
                    <div style={{ margin: "10px" }}>
                      <input
                        type="checkbox"
                        id="homeAttachment"
                        name="homeAttachment"
                        checked={formData.homeAttachment}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            homeAttachment: e.target.checked,
                          })
                        }
                      />
                      <label className="form-label" htmlFor="homeAttachment">
                        Home Attachment
                      </label>
                      <br />

                      <input
                        type="checkbox"
                        id="hostAttachment"
                        name="hostAttachment"
                        checked={formData.hostAttachment}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            hostAttachment: e.target.checked,
                          })
                        }
                      />
                      <label className="form-label" htmlFor="hostAttachment">
                        Host Attachment
                      </label>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label">
                      Refugee Makes Place Of:
                    </label>
                    <div style={{ margin: "10px" }}>
                      <input
                        type="checkbox"
                        id="homeMaking"
                        name="homeMaking"
                        checked={formData.homeMaking}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            homeMaking: e.target.checked,
                          })
                        }
                      />
                      <label className="form-label" htmlFor="homeMaking">
                        Home Making
                      </label>
                      <br />

                      <input
                        type="checkbox"
                        id="hostMaking"
                        name="hostMaking"
                        checked={formData.hostMaking}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            hostMaking: e.target.checked,
                          })
                        }
                      />
                      <label className="form-label" htmlFor="hostMaking">
                        Host Making
                      </label>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label">
                      Refugee Practices Transnationalism:
                    </label>
                    <div style={{ margin: "10px" }}>
                      <input
                        type="radio"
                        id="yes"
                        name="transnationalism"
                        value="yes"
                        checked={formData.transnationalism === "yes"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            transnationalism: e.target.value,
                          })
                        }
                      />
                      <label className="form-label" htmlFor="yes">
                        Yes
                      </label>
                      <br />

                      <input
                        type="radio"
                        id="no"
                        name="transnationalism"
                        value="no"
                        checked={formData.transnationalism === "no"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            transnationalism: e.target.value,
                          })
                        }
                      />
                      <label className="form-label" htmlFor="no">
                        No
                      </label>
                    </div>
                  </div>

                  <div className="submit-query cond8">
                    <input
                      type="submit"
                      value="Make Query"
                      onClick={handleSubmit}
                      className="btn submit-btn m-2 col-5"
                    />
                    <input
                      type="reset"
                      value="Reset"
                      className="btn reset-btn col-2"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{marginTop: '20px'}}>
          <QueryTable />
        </div> */}
      </div>
    </main>
  );
};

export default QueryForm;
