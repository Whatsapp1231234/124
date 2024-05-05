

const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.config_funciones


const optionsFull = `_*${tradutor.texto1[0]}*_\n 

${tradutor.texto1[1]}  | ПРИВЕТСТВИЕ"
${tradutor.texto1[2]} ${usedPrefix + command} приветствие
${tradutor.texto1[3]}

--------------------------------

${tradutor.texto4[0]} | АНТИССЫЛКА
${tradutor.texto4[1]} ${usedPrefix + command} антиссылка
${tradutor.texto4[2]}
${tradutor.texto4[3]}

--------------------------------

${tradutor.texto5[0]} 🔗 | АНТИССЫЛКА 2
${tradutor.texto5[1]}  ${usedPrefix + command} антиссылка2
${tradutor.texto5[2]}
${tradutor.texto5[3]}

--------------------------------

${tradutor.texto6[0]} | ОБНАРУЖИТЬ
${tradutor.texto6[1]} ${usedPrefix + command} обнаружить
${tradutor.texto6[2]}

--------------------------------

${tradutor.texto7[0]} | ОБНАРУЖИТЬ 2
${tradutor.texto7[1]} ${usedPrefix + command} обнаружить2
${tradutor.texto7[2]}

--------------------------------

${tradutor.texto9[0]} | АВТОЧТЕНИЕ
${tradutor.texto9[1]} ${usedPrefix + command} авточтение
${tradutor.texto9[2]}
${tradutor.texto9[3]}

--------------------------------

${tradutor.texto10[0]} | АУДИО
${tradutor.texto10[1]} ${usedPrefix + command} аудио
${tradutor.texto10[2]}

--------------------------------

${tradutor.texto14[0]} | АНТИПРОСМОТЕР 
${tradutor.texto14[1]} ${usedPrefix + command} антипросмотер
${tradutor.texto14[2]}

--------------------------------

${tradutor.texto15[0]} | АНТИЗВОНОК
${tradutor.texto15[1]} ${usedPrefix + command} антизвонок
${tradutor.texto15[2]} 
${tradutor.texto15[3]}

--------------------------------

${tradutor.texto16[0]} | АНТИМАТ
${tradutor.texto16[1]} ${usedPrefix + command} антимат
${tradutor.texto16[2]}
${tradutor.texto16[3]}

--------------------------------

${tradutor.texto17[0]} | АНТИАРАБ
${tradutor.texto17[1]}  ${usedPrefix + command} антиараб
${tradutor.texto17[2]} 
${tradutor.texto17[3]} 

--------------------------------

${tradutor.texto18[0]} | АНТИИНДУС
${tradutor.texto18[1]} ${usedPrefix + command} антииндус
${tradutor.texto18[2]}
${tradutor.texto18[3]}

--------------------------------

${tradutor.texto19[0]} | АНТИИНДУС 2
${tradutor.texto19[1]}  ${usedPrefix + command} антииндус2
${tradutor.texto19[2]} 
${tradutor.texto19[3]} 

--------------------------------

${tradutor.texto20[0]} | ТОЛЬКОАДМИН
${tradutor.texto20[1]} ${usedPrefix + command} толькоадмин
${tradutor.texto20[2]}

--------------------------------

${tradutor.texto22[0]} | ОГРАНИЧИТЬ
${tradutor.texto22[1]} ${usedPrefix + command} ограничить
${tradutor.texto22[2]}

--------------------------------

${tradutor.texto23[0]} | AUDIOS_BOT
${tradutor.texto23[1]} ${usedPrefix + command} audios_bot
${tradutor.texto23[2]}
${tradutor.texto23[3]}

--------------------------------

${tradutor.texto25[0]} | АНТИСПАМ
${tradutor.texto25[1]} ${usedPrefix + command} антиспам
${tradutor.texto25[2]}
${tradutor.texto25[3]}

--------------------------------

${tradutor.texto27[0]} | АНТИЛИЧКА
${tradutor.texto27[1]} ${usedPrefix + command} антиличка    
${tradutor.texto27[2]}
${tradutor.texto27[3]}`.trim();

  const isEnable = /true|включить|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'приветствие':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'обнаружить':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'обнаружить2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'удалить':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'антиудаление':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'антиссылка':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'антиссылка2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'антипросмотер':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'толькоадмин':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'автостикер':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'аудио':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'ограничить':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'audios_bot':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'modoia':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.modoia = isEnable;      
      break;      
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'авточтение':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      //global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'антизвонок':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'антиличка':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'антиспам':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'антимат':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
      case 'game': case 'juegos': case 'fun': case 'ruleta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.game = isEnable          
break;
    case 'антиараб':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'антииндус':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn); 
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'антииндус2':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `▢ *Функция:* ${type}\n\n▢ *Команда:* ${isEnable ? 'Включена' : 'Выключена'}\n\n▢ *Для* ${isAll ? 'этого бота' : isUser ? '' : 'этого чата'}`}, {quoted: m});
};
handler.command = /^((вк|вык)лючить|(tru|fals)e|(turn)?[01])$/i;
export default handler;
