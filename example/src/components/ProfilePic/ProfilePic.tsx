import React from 'react';
import { Box } from '../../designSystem/theme';
import { Image } from 'react-native';

export interface ProfilePicProps {
  url: string;
}

const ProfilePic = ({ url }: ProfilePicProps) => {
  const customImageStyle = {
    flex: 1,
  };

  return (
    <Box
      borderWidth={1}
      borderColor="profilePicBorder"
      borderRadius="circle"
      alignSelf="flex-end"
      overflow="hidden"
      width={32}
      height={32}
    >
      <Image
        source={{
          uri: url,
        }}
        style={customImageStyle}
      />
    </Box>
  );
};

export default ProfilePic;
