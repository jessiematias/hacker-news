import styled from "styled-components";

export const SearchField = styled.div`
margin: 3rem 30vw 3rem 3rem;
h2 {
    margin-bottom: 1rem;
    font-size: 3rem;
}

input {
    position: relative;
    border: none;
    width: 100%;
    height: 3.3rem;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.story};
    color: ${({ theme }) => theme.text};
    font-size: 1.6rem;
    padding-left: 1rem;
    &:focus {
        border: 2px solid #F0652F;
        outline: none;
    }
}
`