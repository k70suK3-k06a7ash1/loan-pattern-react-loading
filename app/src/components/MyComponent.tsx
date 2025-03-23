import  { useState } from 'react';
import { LoadingState } from '../classes/LoadingState';

export const  MyComponent = ()  =>  {
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    using _loading = new LoadingState(setLoading);
    // データ取得処理
    await new Promise(resolve => setTimeout(resolve, 2000)); // 例: 2秒間の非同期処理
    console.log('Data fetched');
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

