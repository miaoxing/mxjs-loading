import Loading from './Loading';
import {Box} from '@mxjs/box';

export default () => {
  return <Box textCenter my5>
    <Loading/>
    <div>努力加载中...</div>
  </Box>;
};
