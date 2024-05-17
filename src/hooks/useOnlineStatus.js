import { useState, useEffect } from "react";

export function useOnlineStatus() {
  // 온라인상태 추적하여 화면내용 변경해야하므로 state사용
  const [isOnline, setIsOnline] = useState(true);

  // 브라우저 API이므로 외부시스템과 동기화위해 effect사용
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // 컴포넌트가 사라질경우(언마운트) 이벤트리스너가 필요없으므로 클린업에서 이벤트리스너 삭제
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
    // 종속성에 빈 배열로 한번만 실행
  }, []);

  // 다른컴포넌트에서 읽을 수 있도록 리턴
  return isOnline;
}
