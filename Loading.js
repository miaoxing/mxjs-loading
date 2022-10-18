import {LoadingOutlined} from '@ant-design/icons';
import {Box} from '@mxjs/box';

const Loading = (props) => <Box text-24 brand500 {...props}>
  <LoadingOutlined spin/>
</Box>;

export default Loading;
