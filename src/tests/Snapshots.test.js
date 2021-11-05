import React from "react";
import renderer from "react-test-renderer";
import LoginPage from "../views/LoginPage";
import HomePage from "../views/HomePage";
import Navigation from "../views/Navigation";
import SignUpPage from "../views/SignUpPage";
import PrivateRoute from "../views/PrivateRoute";
import DashboardPage from "../views/Dashboard/DashboardPage";
import EarnedPopUp from "../views/Dashboard/EarnedPopUp";
import PomodoroTimer from "../views/Dashboard/PomodoroTimer";
import ErrorPopUp from "../views/Dashboard/ErrorPopUp";
import Btn from "../components/Btn";
import Note from "../components/Note";
import SlideShop from "../components/shop/SlideShop";

it("renders Login Page correctly", () => {
  const tree = renderer.create(<LoginPage />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="MuiBox-root css-1voambi"
    >
      <div
        className="MuiBox-root css-1onjt6g"
      >
        <div
          className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-pwcg7p-MuiCollapse-root"
          style={
            Object {
              "minHeight": "0px",
            }
          }
        >
          <div
            className="MuiCollapse-wrapper MuiCollapse-vertical css-smkl36-MuiCollapse-wrapper"
          >
            <div
              className="MuiCollapse-wrapperInner MuiCollapse-vertical css-9l5vo-MuiCollapse-wrapperInner"
            >
              <div
                className="MuiBox-root css-1lojgmi"
              >
                <div
                  className="MuiBox-root css-j035el"
                >
                  <div
                    className="MuiBox-root css-1h8x7c2"
                  >
                    <h4
                      className="MuiTypography-root MuiTypography-h4 MuiTypography-alignLeft css-1f5ya6j-MuiTypography-root"
                    >
                      <b>
                         
                        Welcome 
                        <br />
                         Back
                      </b>
                    </h4>
                  </div>
                  <div
                    className="MuiBox-root css-ii5512"
                  >
                    <h6
                      className="MuiTypography-root MuiTypography-h6 MuiTypography-alignLeft css-hcdnj8-MuiTypography-root"
                    >
                      Hi, kindly sign in below
                    </h6>
                  </div>
                </div>
                <div
                  className="MuiBox-root css-1voambi"
                >
                  <div
                    className="MuiBox-root css-1ipi9ks"
                  >
                    <div
                      className="MuiFormControl-root css-1nrlq1o-MuiFormControl-root"
                    >
                      <div
                        className="MuiBox-root css-1qa3544"
                      >
                        <div
                          className="MuiFormControl-root MuiTextField-root css-1g7lsi9-MuiFormControl-root-MuiTextField-root"
                        >
                          <label
                            className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root"
                            data-shrink={false}
                            htmlFor="userName"
                            id="userName-label"
                          >
                            Username
                          </label>
                          <div
                            className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root"
                            onClick={[Function]}
                          >
                            <input
                              aria-invalid={false}
                              autoFocus={false}
                              className="MuiOutlinedInput-input MuiInputBase-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input"
                              disabled={false}
                              id="userName"
                              onAnimationStart={[Function]}
                              onBlur={[Function]}
                              onChange={[Function]}
                              onFocus={[Function]}
                              required={false}
                              type="text"
                              value=""
                            />
                            <fieldset
                              aria-hidden={true}
                              className="MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline"
                            >
                              <legend
                                className="css-dhh0px"
                              >
                                <span>
                                  Username
                                </span>
                              </legend>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                      <div
                        className="MuiBox-root css-1o3848f"
                      >
                        <div
                          className="MuiFormControl-root MuiTextField-root css-1g7lsi9-MuiFormControl-root-MuiTextField-root"
                        >
                          <label
                            className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root"
                            data-shrink={false}
                          >
                            Password
                          </label>
                          <div
                            className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root"
                            onClick={[Function]}
                          >
                            <input
                              aria-invalid={false}
                              autoFocus={false}
                              className="MuiOutlinedInput-input MuiInputBase-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input"
                              disabled={false}
                              onAnimationStart={[Function]}
                              onBlur={[Function]}
                              onChange={[Function]}
                              onFocus={[Function]}
                              required={false}
                              type="password"
                              value=""
                            />
                            <fieldset
                              aria-hidden={true}
                              className="MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline"
                            >
                              <legend
                                className="css-dhh0px"
                              >
                                <span>
                                  Password
                                </span>
                              </legend>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                      <div
                        className="MuiBox-root css-0"
                      >
                        <p
                          className="MuiFormHelperText-root MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-ge0t11-MuiFormHelperText-root"
                        >
                          Please ensure all fields have been completed.
                        </p>
                        <p
                          className="MuiFormHelperText-root MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-5053p1-MuiFormHelperText-root"
                        >
                          Incorrect username or password.
                        </p>
                        <div
                          className="MuiBox-root css-1yx7364"
                        >
                          <button
                            className="logInButton"
                            onClick={[Function]}
                          >
                            Log In
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Don't have an account?
                    <button
                      className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root css-4s7b9c-MuiButtonBase-root-MuiButton-root"
                      disabled={false}
                      onBlur={[Function]}
                      onClick={[Function]}
                      onContextMenu={[Function]}
                      onDragLeave={[Function]}
                      onFocus={[Function]}
                      onKeyDown={[Function]}
                      onKeyUp={[Function]}
                      onMouseDown={[Function]}
                      onMouseLeave={[Function]}
                      onMouseUp={[Function]}
                      onTouchEnd={[Function]}
                      onTouchMove={[Function]}
                      onTouchStart={[Function]}
                      tabIndex={0}
                      type="button"
                    >
                      Sign up
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden css-bz4dnt-MuiCollapse-root"
          style={
            Object {
              "minHeight": "0px",
            }
          }
        >
          <div
            className="MuiCollapse-wrapper MuiCollapse-vertical css-smkl36-MuiCollapse-wrapper"
          >
            <div
              className="MuiCollapse-wrapperInner MuiCollapse-vertical css-9l5vo-MuiCollapse-wrapperInner"
            >
              <div
                className="MuiBox-root css-1wnnet2"
              >
                <div
                  className="MuiBox-root css-sn6vob"
                >
                  <div
                    className="MuiBox-root css-1h8x7c2"
                  >
                    <h4
                      className="MuiTypography-root MuiTypography-h4 MuiTypography-alignLeft css-1f5ya6j-MuiTypography-root"
                    >
                      <b>
                         
                        Create 
                        <br />
                         Account
                      </b>
                    </h4>
                  </div>
                  <div
                    className="MuiBox-root css-ii5512"
                  >
                    <h6
                      className="MuiTypography-root MuiTypography-h6 MuiTypography-alignLeft css-hcdnj8-MuiTypography-root"
                    >
                      Please fill in details below
                    </h6>
                  </div>
                </div>
                <div
                  className="MuiBox-root css-1voambi"
                >
                  <div
                    className="MuiBox-root css-1ipi9ks"
                  >
                    <div
                      className="MuiFormControl-root css-1nrlq1o-MuiFormControl-root"
                    >
                      <div
                        className="MuiBox-root css-1qa3544"
                      >
                        <div
                          className="MuiFormControl-root MuiTextField-root css-1g7lsi9-MuiFormControl-root-MuiTextField-root"
                        >
                          <label
                            className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root"
                            data-shrink={false}
                          >
                            Username
                          </label>
                          <div
                            className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root"
                            onClick={[Function]}
                          >
                            <input
                              aria-invalid={false}
                              autoFocus={false}
                              className="MuiOutlinedInput-input MuiInputBase-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input"
                              disabled={false}
                              onAnimationStart={[Function]}
                              onBlur={[Function]}
                              onChange={[Function]}
                              onFocus={[Function]}
                              required={false}
                              type="text"
                              value=""
                            />
                            <fieldset
                              aria-hidden={true}
                              className="MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline"
                            >
                              <legend
                                className="css-dhh0px"
                              >
                                <span>
                                  Username
                                </span>
                              </legend>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                      <div
                        className="MuiBox-root css-1o3848f"
                      >
                        <div
                          className="MuiFormControl-root MuiTextField-root css-1g7lsi9-MuiFormControl-root-MuiTextField-root"
                        >
                          <label
                            className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root"
                            data-shrink={false}
                          >
                            Password
                          </label>
                          <div
                            className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root"
                            onClick={[Function]}
                          >
                            <input
                              aria-invalid={false}
                              autoFocus={false}
                              className="MuiOutlinedInput-input MuiInputBase-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input"
                              disabled={false}
                              onAnimationStart={[Function]}
                              onBlur={[Function]}
                              onChange={[Function]}
                              onFocus={[Function]}
                              required={false}
                              type="password"
                              value=""
                            />
                            <fieldset
                              aria-hidden={true}
                              className="MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline"
                            >
                              <legend
                                className="css-dhh0px"
                              >
                                <span>
                                  Password
                                </span>
                              </legend>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                      <div
                        className="MuiBox-root css-1o3848f"
                      >
                        <div
                          className="MuiFormControl-root MuiTextField-root css-1g7lsi9-MuiFormControl-root-MuiTextField-root"
                        >
                          <label
                            className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root"
                            data-shrink={false}
                          >
                             Confirm Password
                          </label>
                          <div
                            className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root"
                            onClick={[Function]}
                          >
                            <input
                              aria-invalid={false}
                              autoFocus={false}
                              className="MuiOutlinedInput-input MuiInputBase-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input"
                              disabled={false}
                              onAnimationStart={[Function]}
                              onBlur={[Function]}
                              onChange={[Function]}
                              onFocus={[Function]}
                              required={false}
                              type="password"
                              value=""
                            />
                            <fieldset
                              aria-hidden={true}
                              className="MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline"
                            >
                              <legend
                                className="css-dhh0px"
                              >
                                <span>
                                   Confirm Password
                                </span>
                              </legend>
                            </fieldset>
                          </div>
                          
                        </div>
                      </div>
                      <div
                        className="MuiBox-root css-0"
                      >
                        <p
                          className="MuiFormHelperText-root MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-ge0t11-MuiFormHelperText-root"
                        >
                          Please ensure all fields have been completed.
                        </p>
                        <div
                          className="MuiBox-root css-1q4k4t"
                        >
                          <button
                            className="logInButton"
                            onClick={[Function]}
                          >
                            Sign Up
                          </button>
                          <div
                            className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAlert-root MuiAlert-standardSuccess MuiAlert-standard css-l00isr-MuiPaper-root-MuiAlert-root"
                            role="alert"
                          >
                            <div
                              className="MuiAlert-icon css-1ytlwq5-MuiAlert-icon"
                            >
                              <svg
                                aria-hidden={true}
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root"
                                data-testid="SuccessOutlinedIcon"
                                focusable="false"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
                                />
                              </svg>
                            </div>
                            <div
                              className="MuiAlert-message css-acap47-MuiAlert-message"
                            >
                              Account created successfully!
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Already have an account?
                    <button
                      className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root css-4s7b9c-MuiButtonBase-root-MuiButton-root"
                      disabled={false}
                      onBlur={[Function]}
                      onClick={[Function]}
                      onContextMenu={[Function]}
                      onDragLeave={[Function]}
                      onFocus={[Function]}
                      onKeyDown={[Function]}
                      onKeyUp={[Function]}
                      onMouseDown={[Function]}
                      onMouseLeave={[Function]}
                      onMouseUp={[Function]}
                      onTouchEnd={[Function]}
                      onTouchMove={[Function]}
                      onTouchStart={[Function]}
                      tabIndex={0}
                      type="button"
                    >
                      Log In
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
});

it("renders Sign Up Page correctly", () => {
  const tree = renderer.create(<SignUpPage />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div>
      <h1>
        Sign Up page
      </h1>
    </div>
  `);
});

it("renders Pomodoro correctly", () => {
  const tree = renderer.create(<PomodoroTimer />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="MuiBox-root css-0"
    >
      <div
        className="MuiBox-root css-0"
      />
      <div
        className="MuiBox-root css-0"
      />
      <div
        className="MuiBox-root css-55cjvq"
      >
        <div
          className="MuiBox-root css-1hyfx7x"
        >
          <div
            className="RCP "
            style={
              Object {
                "position": "relative",
                "width": "200px",
              }
            }
          >
            <svg
              height={200}
              style={
                Object {
                  "transform": "rotate(-90deg)",
                }
              }
              viewBox="0 0 200 200"
              width={200}
            >
              <circle
                className="RCP__track"
                cx={100}
                cy={100}
                fill="none"
                r={80}
                stroke="#e6e6e6"
                strokeDasharray="502.6548245743669, 502.6548245743669"
                strokeLinecap="round"
                strokeWidth={20}
                style={
                  Object {
                    "transition": ".3s ease",
                  }
                }
              />
              <circle
                className="RCP__progress"
                cx={100}
                cy={100}
                fill="none"
                r={80}
                stroke="#f4a261"
                strokeDasharray="502.6548245743669, 502.6548245743669"
                strokeDashoffset={0}
                strokeLinecap="round"
                strokeWidth={20}
                style={
                  Object {
                    "transition": ".3s ease",
                  }
                }
              />
            </svg>
          </div>
        </div>
        <div
          className="MuiBox-root css-0"
        >
          <div
            className="RCP "
            style={
              Object {
                "position": "relative",
                "width": "200px",
              }
            }
          >
            <svg
              height={200}
              style={
                Object {
                  "transform": "rotate(-90deg)",
                }
              }
              viewBox="0 0 200 200"
              width={200}
            >
              <circle
                className="RCP__track"
                cx={100}
                cy={100}
                fill="none"
                r={80}
                stroke="#e6e6e6"
                strokeDasharray="502.6548245743669, 502.6548245743669"
                strokeLinecap="round"
                strokeWidth={20}
                style={
                  Object {
                    "transition": ".3s ease",
                  }
                }
              />
              <circle
                className="RCP__progress"
                cx={100}
                cy={100}
                fill="none"
                r={80}
                stroke="#e76f51"
                strokeDasharray="502.6548245743669, 502.6548245743669"
                strokeDashoffset={0}
                strokeLinecap="round"
                strokeWidth={20}
                style={
                  Object {
                    "transition": ".3s ease",
                  }
                }
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className="MuiBox-root css-0"
      >
        <h2
          className="MuiTypography-root MuiTypography-h2 css-1sra7t5-MuiTypography-root"
        >
          00
           : 
          00
        </h2>
        <button
          className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-sghohy-MuiButtonBase-root-MuiButton-root"
          disabled={false}
          onBlur={[Function]}
          onClick={[Function]}
          onContextMenu={[Function]}
          onDragLeave={[Function]}
          onFocus={[Function]}
          onKeyDown={[Function]}
          onKeyUp={[Function]}
          onMouseDown={[Function]}
          onMouseLeave={[Function]}
          onMouseUp={[Function]}
          onTouchEnd={[Function]}
          onTouchMove={[Function]}
          onTouchStart={[Function]}
          tabIndex={0}
          type="button"
        >
          start
        </button>
      </div>
      <div
        className="MuiBox-root css-3w6wvp"
      >
        <div
          className="MuiTabs-root css-1ujnqem-MuiTabs-root"
        >
          <div
            className="MuiTabs-scrollableX MuiTabs-hideScrollbar css-agdkjh-MuiTabs-scrollbarSize"
            style={
              Object {
                "height": 99,
                "overflow": "scroll",
                "position": "absolute",
                "top": -9999,
                "width": 99,
              }
            }
          />
          <div
            className="MuiTabs-scroller MuiTabs-hideScrollbar MuiTabs-scrollableX css-69z67c-MuiTabs-scroller"
            onScroll={[Function]}
            style={
              Object {
                "marginBottom": -0,
                "overflow": "hidden",
              }
            }
          >
            <div
              aria-orientation={null}
              className="MuiTabs-flexContainer css-heg063-MuiTabs-flexContainer"
              onKeyDown={[Function]}
              role="tablist"
            >
              <button
                aria-selected={true}
                className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected css-1h9z7r5-MuiButtonBase-root-MuiTab-root"
                disabled={false}
                onBlur={[Function]}
                onClick={[Function]}
                onContextMenu={[Function]}
                onDragLeave={[Function]}
                onFocus={[Function]}
                onKeyDown={[Function]}
                onKeyUp={[Function]}
                onMouseDown={[Function]}
                onMouseLeave={[Function]}
                onMouseUp={[Function]}
                onTouchEnd={[Function]}
                onTouchMove={[Function]}
                onTouchStart={[Function]}
                role="tab"
                tabIndex={0}
                type="button"
              >
                60
                <span
                  className="MuiTabs-indicator css-1aquho2-MuiTabs-indicator"
                  style={Object {}}
                />
              </button>
              <button
                aria-selected={false}
                className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1h9z7r5-MuiButtonBase-root-MuiTab-root"
                disabled={false}
                onBlur={[Function]}
                onClick={[Function]}
                onContextMenu={[Function]}
                onDragLeave={[Function]}
                onFocus={[Function]}
                onKeyDown={[Function]}
                onKeyUp={[Function]}
                onMouseDown={[Function]}
                onMouseLeave={[Function]}
                onMouseUp={[Function]}
                onTouchEnd={[Function]}
                onTouchMove={[Function]}
                onTouchStart={[Function]}
                role="tab"
                tabIndex={-1}
                type="button"
              >
                50
              </button>
              <button
                aria-selected={false}
                className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1h9z7r5-MuiButtonBase-root-MuiTab-root"
                disabled={false}
                onBlur={[Function]}
                onClick={[Function]}
                onContextMenu={[Function]}
                onDragLeave={[Function]}
                onFocus={[Function]}
                onKeyDown={[Function]}
                onKeyUp={[Function]}
                onMouseDown={[Function]}
                onMouseLeave={[Function]}
                onMouseUp={[Function]}
                onTouchEnd={[Function]}
                onTouchMove={[Function]}
                onTouchStart={[Function]}
                role="tab"
                tabIndex={-1}
                type="button"
              >
                40
              </button>
              <button
                aria-selected={false}
                className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1h9z7r5-MuiButtonBase-root-MuiTab-root"
                disabled={false}
                onBlur={[Function]}
                onClick={[Function]}
                onContextMenu={[Function]}
                onDragLeave={[Function]}
                onFocus={[Function]}
                onKeyDown={[Function]}
                onKeyUp={[Function]}
                onMouseDown={[Function]}
                onMouseLeave={[Function]}
                onMouseUp={[Function]}
                onTouchEnd={[Function]}
                onTouchMove={[Function]}
                onTouchStart={[Function]}
                role="tab"
                tabIndex={-1}
                type="button"
              >
                30
              </button>
              <button
                aria-selected={false}
                className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1h9z7r5-MuiButtonBase-root-MuiTab-root"
                disabled={false}
                onBlur={[Function]}
                onClick={[Function]}
                onContextMenu={[Function]}
                onDragLeave={[Function]}
                onFocus={[Function]}
                onKeyDown={[Function]}
                onKeyUp={[Function]}
                onMouseDown={[Function]}
                onMouseLeave={[Function]}
                onMouseUp={[Function]}
                onTouchEnd={[Function]}
                onTouchMove={[Function]}
                onTouchStart={[Function]}
                role="tab"
                tabIndex={-1}
                type="button"
              >
                20
              </button>
              <button
                aria-selected={false}
                className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1h9z7r5-MuiButtonBase-root-MuiTab-root"
                disabled={false}
                onBlur={[Function]}
                onClick={[Function]}
                onContextMenu={[Function]}
                onDragLeave={[Function]}
                onFocus={[Function]}
                onKeyDown={[Function]}
                onKeyUp={[Function]}
                onMouseDown={[Function]}
                onMouseLeave={[Function]}
                onMouseUp={[Function]}
                onTouchEnd={[Function]}
                onTouchMove={[Function]}
                onTouchStart={[Function]}
                role="tab"
                tabIndex={-1}
                type="button"
              >
                10
              </button>
              <button
                aria-selected={false}
                className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1h9z7r5-MuiButtonBase-root-MuiTab-root"
                disabled={false}
                onBlur={[Function]}
                onClick={[Function]}
                onContextMenu={[Function]}
                onDragLeave={[Function]}
                onFocus={[Function]}
                onKeyDown={[Function]}
                onKeyUp={[Function]}
                onMouseDown={[Function]}
                onMouseLeave={[Function]}
                onMouseUp={[Function]}
                onTouchEnd={[Function]}
                onTouchMove={[Function]}
                onTouchStart={[Function]}
                role="tab"
                tabIndex={-1}
                type="button"
              >
                1
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
});

