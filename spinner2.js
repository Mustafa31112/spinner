const animation =  "|/-\\|/-\\|";
let current = 0;
const spinner = () => setTimeout(() => {
  process.stdout.write(`\r${animation[current++]}`);
  if (current < animation.length) {
    spinner();
  }
  if (current === animation.length) {
    process.stdout.write("\n");
  }
}, 200);
spinner();