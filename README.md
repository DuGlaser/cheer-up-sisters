# cheer-up-sisters

自粛で大変なので推しに励ましてもらう

## 概要
自分の1日のコミット数を集計してdiscordに通知してくれます

## 環境設定
プロジェクトのルートにsetup.shを作り以下のように記述します。
```
export DISCORD_WEBHOOK_ID=xxxxxxxxxxxxxxxxxx
export DISCORD_WEBHOOK_TOKEN=xxxxxxxxxxxxxxxxxxxxx
export GITHUB_TOKEN=xxxxxxxxxxxxxxxxxxxxx
export GITHUB_USER_NAME=xxxxxx

yarn start
```
xxxとなっているところには実際に自分のTOKENなどを入れてください
プロジェクトは./setup.shを実行することで開始できます。

## 使い方
util/discord_message.js でメッセージを設定できます。  
下の例ではコミット数に応じてメッセージが変わるようになっています。
```
function createMessage(commitCount) {
  // Customize this for you!
  switch (true) {
    case commitCount <= 3:
      return new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Some title")
        .setAuthor(
          "Some name",
          "https://i.imgur.com/wSTFkRM.png",
          "https://discord.js.org"
        )
        .setImage("https://i.imgur.com/wSTFkRM.png")
        .setTimestamp();

    default:
      break;
  }
}
```
メッセージの作成には[discord.js](https://discordjs.guide/)を使っています。
