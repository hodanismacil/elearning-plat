import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Fadlan buuxi meelaha banaan");
      return;
    }

    // 1. Kaydi xogta si Navbar-ku u arko
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", "admin"); // Dashboard-ka halkan ayuu ku xidhan yahay
    localStorage.setItem("userEmail", email);

    setError("");
    
    // 2. Ogeysii Navbar-ka in isbeddel dhacay (muhiim!)
    window.dispatchEvent(new Event("storage"));

    // 3. U dir bogga hore
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <Card className="w-full max-w-sm bg-[#1a1a1a] border border-gray-800 text-white shadow-2xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription className="text-gray-400">Geli xogtaada si aad u gasho</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="bg-[#111] border-gray-700" 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="bg-[#111] border-gray-700" 
              />
            </div>
            <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;