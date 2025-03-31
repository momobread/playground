import { getServerSession } from 'next-auth';
import { authConfig } from '../_lib/auth';

const HomePage = async () => {
  const session = await getServerSession(authConfig);
  console.log(session, 'dsdsd');
  return (
    <div className="">
      <div>component1</div>
      <div>component2</div>
      <div>component3</div>
      <div>component4</div>
    </div>
  );
};

export default HomePage;
