

export default function login() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`${URL}/login.php`)
      .then((response) => {
        setCategories(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        alert(error.response ? error.response.data.error : error);
      });
  });
}