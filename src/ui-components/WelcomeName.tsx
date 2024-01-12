import { useEffect, useState } from "react";
import { useMsal, useAccount } from "@azure/msal-react";
import Typography from "@mui/material/Typography";

const WelcomeName = () => {
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] || {} || accounts);
  const [name, setName] = useState("");

  useEffect(() => {
    const accessTokenRequest = {
      scopes: ["https://auditmypayrollv1.onmicrosoft.com/api/question.read"],
      account: accounts[0] || accounts,
    };
    if (account && account.name) {
      setName(account.name.split(" ")[0]);
      console.log(accounts);
      instance
        .acquireTokenSilent(accessTokenRequest)
        .then((accessTokenRequest): void => {
          let accessToken = accessTokenRequest.accessToken;
          console.log(accessToken);
        });
    } else {
      setName("");
    }
  }, [account]);

  if (name) {
    return <Typography variant="h6">Welcome, {name}</Typography>;
  } else {
    return null;
  }
};

export default WelcomeName;
