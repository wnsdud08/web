export default function LoginPage() {
  return (
    <form class="flex flex-col p-4">
      <div class="">
        <label>email</label>
        <input placeholder="email" />
      </div>
      <div class="">
        <label>password</label>
        <input placeholder="password" />
      </div>
      <button class="bg-blue-500 rounded-md">login</button>
    </form>
  );
}