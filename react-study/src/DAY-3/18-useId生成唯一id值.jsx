//useId是一个reacthook，用于生成唯一的id值
import { useId } from "react";
function FormWithUseId() {
  const id = useId();
  const emailId = `${id}-email`;
  const passwordId = `${id}-password`;

  return (
    <form>
      <div>
        <label htmlFor={emailId}>邮箱</label>
        <input id={emailId} type="email" placeholder="请输入邮箱" />
      </div>
      <div>
        <label htmlFor={passwordId}>密码</label>
        <input id={passwordId} type="password" placeholder="请输入密码" />
      </div>
    </form>
  );
}
export default FormWithUseId