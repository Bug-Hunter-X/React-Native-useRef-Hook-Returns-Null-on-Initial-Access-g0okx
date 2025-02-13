useEffect(() => {
  if (myRef.current) {
    // Access myRef.current here safely
    console.log('Ref value:', myRef.current);
  }
}, [myRef.current]);