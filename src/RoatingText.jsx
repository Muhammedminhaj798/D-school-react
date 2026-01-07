'use client';

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import { motion, AnimatePresence } from 'motion/react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const RotatingText = forwardRef((props, ref) => {
  const {
    texts,
    transition = { type: 'spring', damping: 30, stiffness: 350 },

    // 🔁 RIGHT → LEFT SLIDE
    initial = { x: '100%', opacity: 0 },
    animate = { x: '0%', opacity: 1 },
    exit = { x: '-120%', opacity: 0 },

    animatePresenceMode = 'wait',
    animatePresenceInitial = false,
    rotationInterval = 2500,

    staggerDuration = 0,
    staggerFrom = 'first',
    loop = true,
    auto = true,

    splitBy = 'words', // 👈 IMPORTANT (keeps text together)
    onNext,

    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...rest
  } = props;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

const elements = useMemo(() => {
  const currentText = texts[currentTextIndex];

  // ✅ JSX / ReactNode support
  if (typeof currentText !== 'string') {
    return currentText;
  }

  // ✅ String support (existing behaviour)
  return currentText.split(' ').map((word, i, arr) => ({
    characters: [word],
    needsSpace: i !== arr.length - 1,
  }));
}, [texts, currentTextIndex]);


  const handleIndexChange = useCallback(
    newIndex => {
      setCurrentTextIndex(newIndex);
      onNext?.(newIndex);
    },
    [onNext]
  );

  const next = useCallback(() => {
    const nextIndex =
      currentTextIndex === texts.length - 1
        ? loop
          ? 0
          : currentTextIndex
        : currentTextIndex + 1;

    if (nextIndex !== currentTextIndex) {
      handleIndexChange(nextIndex);
    }
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  useImperativeHandle(ref, () => ({ next }), [next]);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(next, rotationInterval);
    return () => clearInterval(id);
  }, [next, rotationInterval, auto]);

  return (
    <motion.span
      className={cn(
        'relative flex overflow-hidden whitespace-nowrap',
        mainClassName
      )}
      {...rest}
    >
      <span className="sr-only">{texts[currentTextIndex]}</span>

      <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
        <motion.span
          key={currentTextIndex}
          className="inline-flex items-center gap-1"
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
          aria-hidden="true"
        >
          {typeof elements === 'string' || Array.isArray(elements) ? (
  Array.isArray(elements) ? (
    elements.map((wordObj, i) => (
      <span key={i} className={cn('inline-flex', splitLevelClassName)}>
        <span className={cn('inline-block', elementLevelClassName)}>
          {wordObj.characters[0]}
        </span>
        {wordObj.needsSpace && <span>&nbsp;</span>}
      </span>
    ))
  ) : (
    elements
  )
) : (
  elements
)}

        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
});

RotatingText.displayName = 'RotatingText';
export default RotatingText;
