export default function LoginPage() {
  return (
    <form className="flex flex-col p-4">
      <div className="">
        <label htmlFor="email">email</label>
        <input id="email" name="email" placeholder="email" />
      </div>
      <div className="">
        <label htmlFor="password">password</label>
        <input id="email" name="password" placeholder="password" />
      </div>
      <button className="bg-blue-500 rounded-md">login</button>
    </form>
  );
}