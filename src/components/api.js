const token = "b4c10f5a-3f80-4eca-9376-7d76a7731e69";
const cohortId = "wff-cohort-36";

const baseUrl = `https://mesto.nomoreparties.co/v1/${cohortId}/`;

const callApi = (url, data) =>
  fetch(new URL(url, baseUrl), {
    headers: {
      authorization: token,
      "Content-Type": "application/json",
    },
    ...data,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });

export const getCards = () => callApi("cards");

export const getMe = () => callApi("users/me");

export const updateProfile = (data) =>
  callApi("users/me", {
    method: "PATCH",
    body: JSON.stringify(data),
  });

export const addCard = (data) =>
  callApi("cards", { method: "POST", body: JSON.stringify(data) });

export const deleteCard = (cardId) =>
  callApi(`cards/${cardId}`, { method: "DELETE" });

export const addLike = (cardId) =>
  callApi(`cards/likes/${cardId}`, { method: "PUT" });

export const deleteLike = (cardId) =>
  callApi(`cards/likes/${cardId}`, { method: "DELETE" });

export const updateAvatar = (avatarUrl) =>
  callApi("users/me/avatar", {
    method: "PATCH",
    body: JSON.stringify({
      avatar: avatarUrl,
    }),
  });
