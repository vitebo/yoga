import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@gympass/yoga';
import { Youtube } from '@gympass/yoga-icons';
import { DocTitle } from '../components';
import avatar from '../assets/images/avatarIcons/avatar.png';
import classIcon from '../assets/images/avatarIcons/class.png';
import defaultAvatar from '../assets/images/avatarIcons/defaultAvatar.png';
import defaultAvatarCircle from '../assets/images/avatarIcons/defaultAvatarCircle.png';

const ScrollView = styled.ScrollView`
  padding: 10px;
  margin-bottom: 50px;

  width: 100%;
`;

const AvatarWrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  padding: 20px;
  margin-bottom: 10px;

  width: 100%;
  height: 250px;
`;

const AvatarPage = () => (
  <ScrollView>
    <AvatarWrapper>
      <DocTitle>Default Avatar without image prop</DocTitle>
      <Avatar />
    </AvatarWrapper>
    <AvatarWrapper>
      <DocTitle>Default Avatar</DocTitle>
      <Avatar src={avatar} defaultSource={defaultAvatar} />
    </AvatarWrapper>
    <AvatarWrapper>
      <DocTitle>Default Avatar with placeholder prop</DocTitle>
      <Avatar placeholder={Youtube} width={90} height={90} />
    </AvatarWrapper>
    <AvatarWrapper>
      <DocTitle>Default Avatar with width and height props</DocTitle>
      <Avatar src={avatar} width={80} height={80} />
    </AvatarWrapper>
    <AvatarWrapper>
      <DocTitle>
        Default Avatar with defaultSource props to show a static image when in
        loading the src
      </DocTitle>
      <Avatar.Circle src={classIcon} defaultSource={defaultAvatar} />
    </AvatarWrapper>
    <AvatarWrapper>
      <DocTitle>Circle Avatar without image prop</DocTitle>
      <Avatar.Circle />
    </AvatarWrapper>
    <AvatarWrapper>
      <DocTitle>Circle Avatar </DocTitle>
      <Avatar.Circle src={classIcon} defaultSource="asdasdasd" />
    </AvatarWrapper>
    <AvatarWrapper>
      <DocTitle>
        Circle Avatar with defaultSource props to show a static image when in
        loading the src
      </DocTitle>
      <Avatar.Circle src={classIcon} defaultSource={defaultAvatarCircle} />
    </AvatarWrapper>
    <AvatarWrapper>
      <DocTitle>Circle Avatar with placeholder prop</DocTitle>
      <Avatar.Circle placeholder={Youtube} />
    </AvatarWrapper>
    <AvatarWrapper>
      <DocTitle>Circle Avatar with width and height props</DocTitle>
      <Avatar.Circle src={classIcon} width={100} height={100} />
    </AvatarWrapper>
  </ScrollView>
);

export default AvatarPage;
