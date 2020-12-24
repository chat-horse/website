Follow the instructions below to link your Discord account to your chat.horse
client.

## How To Link Your Account

Note that linking your account is against Discord's Terms of Service. **While
Discord has never banned anyone for this behaviour**, you acknowledge that by
following these instructions you are potentially putting your account at
risk.

### Finding your Discord User Token

First, open the Discord console by pressing CTRL + SHIFT + I (COMMAND + SHIFT + I
on Mac).

Then, navigate to the "Network" tab and press F5 to reload your page/client:

![](/bridges/discord/network-refresh.png)

After refreshing the page with the network tab open, follow these steps (in order):

1. In the "Filter" search box, type "/api" (without quotes).
1. Click "applications" as highlighted in the below image.
1. If not already selected, select the Headers tab (highlighted in below image).
1. Your Discord token can be found near the bottom of the headers tab, after
   "authorization:". **Do not share this token.**

In the below image, each step is labelled:

![](/bridges/discord/api-search-authorization.png)

### Giving the Token to the Discord Bridge Bot

Start a new chat with `@discordbot:chat.horse`.

<img src="/bridges/start-chat.png" title="Use the start chat button to start a chat"/>
<br /><br />

<img src="/bridges/discord/discord-username.png" title="Enter the username of the Telegram bridge bot" style="width: 50%"/>
<br /><br />

Send the bot a message with the contents: `link user your.token-here`.

<img src="/bridges/discord/login-token.png" title="Send the bot a link message" style="width: 50%"/>
<br /><br />

The bot should respond with a success message. Send `help` to view available
commands.