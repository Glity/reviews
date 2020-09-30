import React from 'react';
import styled from 'styled-components';
import icons from '../iconKeys.js';


const StyledBar = styled.div`
  height: 225px;
  width: 715px;
  padding-top: 32px;
  border-bottom: 1px solid #eeeeef;
  border-top: 1px solid #eeeeef;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;

`;

const StyledHeader = styled.h4`
  font-size: 20px;
  line-height: 26px;
  color: #2b273c;
  font-weight: 700;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-bottom: 15px;
`;


const StyledForm = styled.form`
  height: 15px;

`;

const StyledSearch = styled.input`
  outline: none;
  height: 22px;
  width: 252px;
  padding: 13px 16px;
  border-radius: 4px;
  position: relative;
  float: left;
`;

const StyledButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 4px;
  background-color: #f43a3a;
  position: relative;
  float: left;
  outline: none;
  &:hover {
    cursor: pointer;

   }
`;

let ReviewBar = (props) => {


  return (
    <StyledBar>
      <StyledHeader>
      Recommended Reviews
      </StyledHeader>
      <StyledForm>
        <StyledSearch type='text' placeholder='Search within reviews' ></StyledSearch>
        <StyledButton><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="icon_svg"><path d={icons.searchIcon}></path></svg></span></StyledButton>
      </StyledForm>
    </StyledBar>
  );
};

export default ReviewBar;