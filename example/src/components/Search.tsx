import React from 'react';
import { Box, InputText } from '../designSystem/theme';

const Search = () => {
  return (
    <Box backgroundColor="grey100" padding="xl" borderRadius="lg">
      <InputText
        fontFamily="primary"
        fontSize="lg"
        textInput={{
          placeholder: 'Enter keywords',
          clearButtonMode: 'while-editing',
        }}
      />
    </Box>
  );
};

export default Search;
