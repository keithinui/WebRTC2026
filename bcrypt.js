const bcrypt = require('bcrypt');
const saltRounds = 10; // ハッシュ化の強度

// パスワードのハッシュ化
const plainPassword = 'yourPassword'; // ユーザーが入力したパスワード
const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

// ハッシュ化されたパスワードをデータベースに保存
await User.create({
  id: 'yourUserID',
  password: hashedPassword
});
