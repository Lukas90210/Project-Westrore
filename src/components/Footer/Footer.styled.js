import styled from "styled-components";

export const Container = styled.div`
  border-top: 0.5px solid #000;
  padding: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-self: center;
  grid-gap: 40px;
  color: #666;
  .centeredDiv {
    margin: 0 auto;
  }
  p {
    font-size: 13px;
  }
  ul {
    list-style: none;
    margin-top: 30px;
    font-size: 13px;
    p {
      line-height: 2;
    }
    li {
      margin: 17px 0;
    }
  }
  div {
    Button {
      background-color: #222;
      color: #fff;
      font-size: 13px;
      padding: 12px 15px;
      margin-top: 17px;
      border: 1px solid transparent;
      &:hover {
        &:hover {
          background-color: #fff;
          border: 1px solid #666;
          color: #333;
        }
      }
    }
  }
`;

export const Describe = styled.div`
  margin-top: 100px;
  font-size: 12px;
  color: #666;
  line-height: 1.5;
`;

export const Icons = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  .IconItem {
    margin-top: 25px;
    color: #666;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
`;

export const Form = styled.div`
  input {
    padding: 11px 13px;
    background-color: transparent;
    border: 0.5px solid #666;
    color: #666;
    margin-top: 10px;
    outline: none;
    &::placeholder {
      color: #666;
    }
  }
`;
