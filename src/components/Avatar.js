import styled from "styled-components"

import MyPhoto from "../images/PaulSimonOngpin.jpg"

const Avatar = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 50%;
`

Avatar.defaultProps = {
  src: MyPhoto,
  alt: "Paul Simon Ongpin",
  width: "150px",
  height: "150px",
}

export default Avatar
