import {LoadingOutlined} from '@ant-design/icons';
import {Box} from '@fower/react';

export default (props) => <Box text-24 brand {...props}>
  <LoadingOutlined spin/>
</Box>;
