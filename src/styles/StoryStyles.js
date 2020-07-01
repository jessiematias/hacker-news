import styled from "styled-components";

export const StoryContainer = styled.div`
margin-left: 3rem;
h3 {
    cursor: pointer;
    a {
       color: ${({ theme }) => theme.text};
       text-decoration: none;
    }
}
`

export const StoriesContainer = styled.div`
display: flex;
background-color: ${({ theme }) => theme.story};
width: 80%;
margin: 1rem auto;
padding: 1.5rem;
align-items: center;
`

export const Points = styled.div`
font-size: 1.5rem;
`