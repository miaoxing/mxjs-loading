import Loading from './Loading';
import {Box} from '@mxjs/box';

const PageLoading = () => {
  return <Box textCenter my5>
    <Loading/>
    <Box mt4>努力加载中...</Box>
  </Box>;
};

export default PageLoading;
