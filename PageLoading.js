import React from 'react';
import Loading from './Loading';
import {Box} from 'rebass';

export default () => {
  return <Box textAlign="center" my={5}>
    <Loading/>
    <div>努力加载中...</div>
  </Box>;
};
