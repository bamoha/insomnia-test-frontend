const formatCurrency = (num: number | string) => {
    const localNumber = typeof num === 'string' ? parseInt(num) : num;

    return Math.sign(localNumber || 0) === -1
        ? `${localNumber
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
              .slice(1)}`
        : `${localNumber
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
};

export default formatCurrency;
