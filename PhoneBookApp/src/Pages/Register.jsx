import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import { InnerContainer } from "../Components/Elements";
import SignupForm from "./SignupForm";
import { AccountContext } from "../Assets/Contexts/AccountContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import store from "../Assets/Redux/Store";

const RegisterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoxContainer = styled.div`
  width: 290px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  background-color: #eef;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.div`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
`;

const SmallText = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  margin-top: 7px;
  z-index: 10;
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  width: 160%;
  height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  top: -290px;
  left: -70px;
  transform: rotate(60deg);
  background: linear-gradient(
    58deg,
    rgb(97, 103, 122) 20%,
    rgb(216, 217, 218) 100%
  );
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

const Register = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setUser({...user, [e.target.name] : e.target.value});
  };

  const validateForm = (value) => {
    const errors = {};
    const emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const passwordPattern = /^(?=.*[0-9])(?=.*[a-z]).{8,32}$/

    if (!value.email) {
        errors.email = "Please enter email id"
    }
    else if (!emailPattern.test(value.email)) {
        errors.email = 'Enter valid email'
    }

    if (!value.password) {
        errors.password = "Please enter password"
    }
    else if (!passwordPattern.test(value.password)) {
        errors.password = 'Enter valid password'
    }

    return errors;
  }

  useEffect(() => {

    setError(validateForm(user));

  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch({
      type : "login",
      payload : user
    })
    if(Object.keys(error).length === 0) {
      navigate("/home");
    }
    else {
      alert('Invalid email and password')
    }
  };

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = {
    switchToSignup,
    switchToSignin,
    handleChange,
    handleSubmit,
    error
  };

  return (
    <>
      <AccountContext.Provider value={contextValue}>
        <div className="register-container bg-dark bg-gradient h-100">
          <RegisterContainer>
            <BoxContainer>
              <TopContainer>
                <BackDrop
                  initial={false}
                  animate={isExpanded ? "expanded" : "collapsed"}
                  variants={backdropVariants}
                  transition={expandingTransition}
                />
                {active === "signin" && (
                  <HeaderContainer>
                    <HeaderText>Welcome</HeaderText>
                    <HeaderText>Back</HeaderText>
                    <SmallText>Please sign-in to continue!</SmallText>
                  </HeaderContainer>
                )}
                {active === "signup" && (
                  <HeaderContainer>
                    <HeaderText>Create</HeaderText>
                    <HeaderText>Account</HeaderText>
                    <SmallText>Please sign-up to continue!</SmallText>
                  </HeaderContainer>
                )}
              </TopContainer>
              <InnerContainer>
                {active === "signin" && <LoginForm />}
                {active === "signup" && <SignupForm />}
              </InnerContainer>
            </BoxContainer>
          </RegisterContainer>
        </div>
      </AccountContext.Provider>
    </>
  );
};

export default Register;
