import React from 'react'
import PinterestIcon from '@material-ui/icons/Pinterest';
const Header=()=>{
   return(
      <Wrapper>
         <LogoWrapper>
            <PinterestIcon/>
         </LogoWrapper>
         <HomePageButton></HomePageButton>
         <FollowingButton></FollowingButton>
         <SearchWrapper>
            <SearchBarWrapper>

            </SearchBarWrapper>
         </SearchWrapper>
         <IconsWrapper>

         </IconsWrapper>
      </Wrapper>
   )
}

export default Header;

const Wrapper=styled.div`
display: flex
`

