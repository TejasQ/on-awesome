export const onWord = (word: string, thingToDo: (...args: any[]) => void) => {
  const expectedKeySequence = word
    .split("")
    .map((letter) => letter.toLowerCase());
  let keysPressed: string[] = [];
  let currentKeyIndex = 0;

  const reset = () => {
    keysPressed = [];
    currentKeyIndex = 0;
  };

  const isAwesome = () => keysPressed.join("") === expectedKeySequence.join("");

  const respondToKeyUp = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase();

    if (key === expectedKeySequence[currentKeyIndex]) {
      keysPressed.push(key);
      currentKeyIndex++;
    } else {
      reset();
    }

    if (isAwesome()) {
      thingToDo(e.key);
    }
  };

  document.addEventListener("keyup", respondToKeyUp);

  return {
    cleanUp: () => document.removeEventListener("keyup", respondToKeyUp),
    isAwesome,
    reset,
  };
};

export const onAwesome = (thingToDo: (...args: any[]) => void) =>
  onWord("awesome", thingToDo);
