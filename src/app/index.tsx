import { FC } from 'react';
import { CommonButton } from '../components/Buttons';

import './index.scss';

const App: FC = () => {
  return (
    <div className='App'>
      <div className='tw-m-3'>
        <div className='tw-mt-4'>
          <CommonButton color={'danger'}>
            <img src={'https://via.placeholder.com/100'} />
          </CommonButton>
        </div>
        <div className='tw-mt-4'>
          <CommonButton color={'danger'}>
            Test
          </CommonButton>
        </div>
        <div className='tw-mt-4'>
          <CommonButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              console.log('click', e);
            }}
          >
            {' '}
            btn{' '}
          </CommonButton>
        </div>
      </div>
    </div>
  );
};

export default App;
