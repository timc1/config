source ~/.secrets
export PATH="~/bin:$PATH"
export PATH="$HOME/.rbenv/bin:$PATH"

if [ -x "$(command -v rbenv)" ]; then
  eval "$(rbenv init -)"
fi

# Sets colors for Terminal
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad

echo '''
    _____________
   / "MOOO MOOO! \
   \    Moooo!   /
     -----------
       \   ^___^
        \  (O O)\_________
           (___)\         )\/\
                ||------w |
                ||       ||
'''

# Load RVM into a shell session *as a function*
[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm"

# Start the SSH agent
eval "$(ssh-agent -s)"
# Add the SSH key
ssh-add

alias python="python3.7"
alias ss="python -m http.server 8888"
alias checkport='netstat -vanp tcp | grep'
alias ls='ls -GFh'
alias ll='ls -1a'
alias ..='cd ../'
alias sb='source ~/.zprofile'
alias pg='echo "Pinging Google" && ping www.google.com'
# git aliases
alias gs="git status"
alias gp="git pull"
alias gf="git fetch"
alias gpush="git push"
alias gd="git diff"
alias ga="git add ."
alias gc="git commit -m"
alias gb="git branches"
alias gsu="git submodule update"
#yarn aliases
alias ya="yarn add"
alias yad="yarn add --dev"
alias yr="yarn remove"
alias ys="yarn start"
alias yb="yarn build"
alias yd="yarn deploy"
alias yt="yarn test"
alias ytw="yarn test --watch"
alias yrd="yarn run dev"

#werk aliases
alias yws="yarn web start"
alias yds="yarn desktop start"
alias ywf="yarn web flow"
alias ydf="yarn desktop flow"
alias ysf="yarn shared flow"

alias gg="git grep -n --column"

# Custom functions
function killport (){
  lsof -i tcp:"$1" -t | xargs kill -9
  lsof -i tcp:"$1" -t 2>/dev/null >/dev/null || printf "killed processes on port %s\n" "$1"
}

# Restart Mac Touchbar -_-
function restartTouchbar() {
  pkill "Touch Bar agent";
  killall "ControlStrip";
}

# Unlimited WiFi at places with restricted time limits.
function changeMac() {
  local mac=$(openssl rand -hex 6 | sed 's/\(..\)/\1:/g; s/.$//')
  sudo ifconfig en0 ether $mac
  sudo ifconfig en0 down
  sudo ifconfig en0 up
  echo "Your new physical address is $mac"
}

# cd path alterations
CDPATH=.:$HOME:$HOME/Desktop:$HOME/Desktop/projects:$HOME/Desktop/consulting

# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
