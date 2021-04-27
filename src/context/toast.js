import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from 'react';

const ToastContext = createContext();

ToastContext.displayName = 'ToastContext';

const ToastProvider = (props) => {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState('');
  const [stayOpen, setStayOpen] = useState(false);

  const hideToast = () => {
    setVisible(false);
    setTimeout(() => {
      setMessage('');
      setType('');
      setStayOpen(false);
    }, 500);
  };

  const showToast = (data) => {
    setMessage(data.message);
    setType(data.type);
    setVisible(true);
    setStayOpen(data.persist);
  };

  const showErrorToast = useCallback(async (error, persist) => {
    setMessage('Something went wrong');
    setType('error');
    setVisible(true);
    setStayOpen(persist);
  }, []);

  const showSuccessToast = useCallback((msg, persist) => {
    setMessage(msg);
    setType('success');
    setVisible(true);
    setStayOpen(persist);
  }, []);

  useEffect(() => {
    const handleToast = () => {
      if (visible && !stayOpen) {
        setTimeout(() => {
          hideToast();
        }, 3000);
      }
    };

    const unsubscribe = handleToast();

    return () => unsubscribe;
  }, [visible, stayOpen]);

  return (
    <ToastContext.Provider
      value={{
        hideToast,
        showToast,
        message,
        visible,
        type,
        showErrorToast,
        showSuccessToast,
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

const useToast = () => {
  const context = useContext(ToastContext);

  return context || {};
};

export { ToastProvider, useToast };
