import styled from 'styled-components'

export const Spinner = styled.div`

@keyframes loading {
	to { 
        transform: rotate(360deg); 
        }
}
position: absolute;
	top: 50%;
	left: 50%;
	margin: -20px 0 0 -20px;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: transparent;
	border-top: 4px solid #fff;
	border-right: 4px solid #fff;
	border-bottom: 4px solid #121212;
	border-left: 4px solid #121212;
	animation: loading 1.2s infinite linear;

  `