import { Grid, useTheme, Select, MenuItem, FormControl, Typography, useMediaQuery, InputLabel} from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Footer = () => {
  const theme = useTheme();
  const sm = useMediaQuery (theme.breakpoints.up('sm'));
  const md = useMediaQuery (theme.breakpoints.up('md'));
  const lg = useMediaQuery (theme.breakpoints.up('lg'));
  const xl = useMediaQuery (theme.breakpoints.up('xl'));
  

  const MAIN_LINKS = ["Libreria dei Giochi", "Registrati", "Riscatta codice", "EA App", "Informazioni", "Accessibilità", "Aiuto"];
  const TC_LINKS = ["Note legali e privacy", "Accordo con l'utente", "Politica sulla privacy e sui cookie", "Aggiornamenti sui servizi online", "Termini di servizio di YouTube", "Norme sulla privacy di Google", "Cookie preferenze"];
  const PRICES = ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Slovenia", "Spain", "Sweden", "Switzerland"]
  const LANGUAGES = [
    {
      name: "United States",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABVElEQVR42l2RP0vDQBjGb3DQT9BZN3Wqky46FZysk4iC4D8UOwgWxE5CEN3EwVkcXBQHEbSgm7RLv4AtUihqKkQTay5n7hpTfC4Xz9Dj4eUuee73vLxH1nMPi0v3qGqTFDPyn9vz1eVJe20WVYnAF/yEl3fvuh4XrSAIUMMwxIYzpnV2fiovwDdeEFnDQ9Ua2eRip9BeWRXTWZHJ+KNj/OhQJiBawjodmHzfR3UcB+6erQ9Kqeu6TrSC9gz+lkul/wQNVu6+hbJmQ2x4iO8bcQL6htX+8mAFDO7nl3rv1BW+4GhF69U0W9+seHMdt9TFhpsM3gJM02mwWf+AlJE/2ZgggCEB/QHgebLppt1UfVt/C3izWms1Ggd7uwT3RKWSHIjqW4IjNieEplJQnPBYe8K4gRdCcM4RhRw1dea6LJrSm+UBj17wjqTrIZMCD/ViToK1fgEIGF+0KWM5dQAAAABJRU5ErkJggg=="
    },
    {
      name: "United Kingdom",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABQklEQVR42mWRsUtCURTG7+Df0NwkbeESuTa25NAQgdiQ1hIELi0hPKRNcXk8cK3J0KxoihqCN2dDBIG0pnBdRDJf9+LvduAmdPl4HM4533e+c55qRM938edpFBeCB8H7x6i1WwYEucMuWNvukCdDm7q4fUuu2tZaysSAeBKG00bdWIscuH96nQTl5MdElz0FNX4ZwgHGGMr0zfaLAOZJJSYPmRitpZWaI8Cjr//Ym54F9vfR/Z3bkiDRGkVcQXYEnNh/j24hLD4mw1SswkTxIH0eX+vZcSbjv2SqyxuLE4wXk6Y/bZMI3ATMsQC3c6trLbuKpCffhNe439w7V+kjR2B97sPGeCsct/0EJKnyJa8PdtBVqbziRHTQzbG5A8CC7ECr/DhKxINiCTnFz2NvxjFUgDeWA84xkthI5dOrTaSpzgHPM2cUphkv7gAAAABJRU5ErkJggg=="
    },
    {
      name: "Australia",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABT0lEQVR42mWRPUvDUBSG7xD8Cc5O4uTkXlBwcHIRXEpd/FgKEXQKIoZiFRUqVuIgKChdYsXaQaSoYKmoS1tLKwhBsFJJBt3E0edwbfyCl5uTe8/z3vck6spOry8fqu54oqsfdfasmZHRnZkVZURDDY3tSaH6RJGR7Vbxtvn81ipcNNycd175aNT38/ezS6coZp8VLuvVWo2dmJkV4FqpYDHpW5Y/PoFe4ia6mZzmeHjqCG8YuvHlVQBi4O0fuMJY1nsm462m8vYWx45bAaAV6TsF4OGX79zdIsOg9EkAf7yZo5swiO45p6RrARiRoQnAmkzMY4wFNd46d+/gBnXKKcvoMrcRxYADHVrnxlWvdLNym8aU0SGAfA0zi1+pGrAb5taAGlhg1eQv4OHxNQgCzH52a2M2wf4C7HLD/2zM+tT0mOEb+JL+kaE4a0uCtetPJnnvAGarUGAAAAAASUVORK5CYII="
    },
    {
      name: "France",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABCUlEQVR42mMonXkNiDIn34GQt+6/u3/v/sXLl4Ho7LmzQPSKn/8lA8NtBoaXYMQAVHf04is4+gEG38HgCwh8/jGh7+vUqT/amoDoNlzD1qMvIOjdu3evkMCTp0+/NhV/LC58XxaNRcOaXa8hGuDagBogqt+mRwB1gjQkdd9E04BsCVADRDUQAXVCNUCUAtGSzdeBjn4HAxA9ENXPoyKBOkEa4pv2QowHqgaiT58+odkAUf0yxP95bsEJoIawxitw1UCEphqIIKqBCKjzBNwGoNIp219NX30BTfWjx3chqt+4uEI1BGRsgHsAqw1wT0M1GOduMgtZB0Ecfhu2b90EQUtWLoAgoCJkBABwtXFCOK2MzAAAAABJRU5ErkJggg=="
    },
    {
      name: "Deutschland",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABCElEQVR42mPw9XJARvb2BvgRA1DR9q2bkNGSlQvQUHtLPYREaAByICgjJRUZIdsMlAUyGArsI/ZumTa/pBvIh5CdsSA0L8seKIWMoDZscLT4vX7tz4rKXzn5v1JSgehHTMLb9IifAf5vXFyB5HcLy8+mmq80Nb82FQMVY9HwJSwcqO6nqysQvbS2hqgGovdl0QgNmKqBxgPRZ0NDiOrHEhJQG1Z3av08s/rrplwg+rjSD47eTvF5062NjIAKoBr+vl/8+1fY17vFHx74/bkTDiR/XnP+dtEAyACSQPTptDwQPboaAVTMcOiQD1DD9xd9aOj3k2KgEUAEVAdhABEw6EA24EdARcgkAMhYEh1utyQwAAAAAElFTkSuQmCC"
    },
    {
      name: "Italia",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAA50lEQVR42nWRMQ/BQBSAL0aRdDQzMnVjJWam1iDiV4jE5g+ZLSYSC6vIhSbowFrX3rXVeL0Xjza8fOn0fb17LSvOSt84Jwe4uu75cgT2By4ZQ24aBtJ0MyGSJHnqieKUMAzlYPSwbED1up+gv7CRpw7iOI6iCGylVNBoeqYp6rU/QdaGQVtUqqrT+RGAR7aUMggCtAE4Kh+0562cnQba9srlTAAqAouS7fu+gNF2JhguxxTkbSFAvRtG2pgmxwAvgwhfkP3QgwEAy3A6gZamq1MDL8YP9TmBWQViu9uuVyt8Ilz/YP7mBVsTOUQfESu+AAAAAElFTkSuQmCC"
    },
    {
      name: "日本",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABDElEQVR42m2RMU7DQBBFfRUoQ5WOHCA1VNBQcAxyAW6QhoIbIGq4Q5BQBBGKQiRIGqQgtPasd21s8XYn2Abl68uN3x/PfCfGGOec916s4CzL0jT97OgjarVe47f3RSIidV1X0aoq6juqLMuiKBjH0DzPl6/LbaCjyt3f1aNLfzEqb28a1Fq7I8DgAA2H6vxwIOMxAWgwnrOXeRsI9Gbjj48aWu2en2C4jWcIcKLSbMy7Lp32+3LQY0NtgsDjdJrQktLcF77wS4OqmQIN1ga2dCyEpVt6b5/Tv6yYKGIhQNMEiigf5a6u3dl5dnJK2PzV5GESAk3ZWqLW4kT0Vt2nDfz7kTSNaUPNDmpQ9Q8de8Ify+OPnAAAAABJRU5ErkJggg=="
    },
    {
      name: "Polska",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAAyklEQVR42n2OsQ6CMBRF+weMzDrqxKYfwKyTLg4OsJm46k8YP0/DwmIiJCQSLKVUjJcWKlX05qTDy7mvj1Rp2kUkiYbFV80tDBUE0tNMJfOQKcuSc17I0Jz2FLQthNA2YyzPc7yX09ko/LGpjFHQZ/yym0JBSHE88N2+3GwbPL9YrcF9sQR8PuOuCzCJCKkLkPQUsMkUZI5DxyM6GILMtgGGwUdBqaBWTTu2LKxoC57ftb93wwYYNgV1sTq69za14v2DImrfLkH7al79dWSVyfXhRAAAAABJRU5ErkJggg=="
    },
    {
      name: "Brasil",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABDklEQVR42mNgCGPCh/QYoCQcAfnVJyogqG5vHQRtuB8MRNmbsoEocXUiBIUsCYFqAKqAywFFf/8KgyP3WW5AZDLBGIhAGljYoDZAVANNBSrKL/xkV/kTiICMb18NZ5wTRtcAtCFiZzjEyMvntjx+8h6Ith59YZT/I75gLVAPEAE1OK93QtgAd0NS902Q2XMer9n1+ujFV/VLH4I1iAJR2a4IFBuAEkANEzvXAQ0G6gGSQD1LVi6AqDafLgK0BKoB6AGg+4AI6AegNqDTgaqBCOwHUaAfuJp4gAjoe4QGSGgAEdChQD0fHvgBEVA10FSgUjgJ1qDHgBymQATUBokHSIDCgxWhAT0ugQgogQMBAM8n1yv5YwVsAAAAAElFTkSuQmCC"
    },
    {
      name: "Россия",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAA3klEQVR42n3MvQ7BYBQG4LOajGZiECYbq5DYSCQSYnABFdyJS3ABNpvdBVgZDCRNK36q7dcfP/Gmp2k/knrz9KRfe96PLOvNHs+X53k3YfPxbFig6uGEw/EKhH+cV4CDMiB8C+IE2e4vcYHzlOIH4VUhRFio1/3F6jSbOUnG03s0UymD8OAAaPKMFApChi9xQd6LtuUO1v4Vfu7GTvRCSyJ1NFH7vU1NYet8J8mciFwiXxm7za5TqTKzXMa0szkwMxk9nQaNyC4Vd1xwB0PmtVuhRgPkK7AtFQJagt23D78OOlrpRiSPAAAAAElFTkSuQmCC"
    },
    {
      name: "España",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAA2UlEQVR42mP4wcCAC71EYsARiP+zohKI/lW2QRi/cvKhKCUViH7EJPwM8IcghAagKATB5X66ugLRdwtLIPpsaAhEQC5Iw7evor9/hcHRhwd+QPLbV0MIiYRAyp4+RdXwviz6bXrE9xd9mKohDBQNP3btBKp+ef4SkAG0B0ODKLqGZ2+fvZ3i8zLEH8hA1SCKXcPlc1ten/T+uNJv75ZpGEqRNABDCRh28ACBhMlXba2vikpA9FlcHIhe8fMDEVDwNgNMAzxMv4SFYw1TkBFwDZjRCUG3kRhwBABSdCQSWYwoDgAAAABJRU5ErkJggg=="
    },
    {
      name: "Česká republika",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABCklEQVR42mPgjDtav/Thly9fvn79CiQ/wcA7GHgFBk+ePoUgBqCGKdtf3br/7u+/f0AEBH/B4A8Y/P79+9evXz9//vzx48f379/v37sP1QC05OjFV8iq0ZR++/YNXQNED9CS33/+YqoGOhhIomvIn/MYqAeraogPr9+8zcDhtwFZAxAda5ryY9Y8IHo9ffrXqVN/TOh71dYOJIHc2wwMCA2lq4+Xzrw2v6T7pbX1Z0PDp4YGrzQ1HykpA9FjCYlX/PxA8RNwDUClQLOBqr9bWMJVAxFQKQQBNQAFUTSgmf1VUQluNgQhNADdA3T3l7BwIHoZ4v/GxRWCgPohCKgUgqAagNRtDHQCBwIA+OVWMrU7rKMAAAAASUVORK5CYII="
    },
    {
      name: "Canada (En)",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABZ0lEQVR42lWRvUvDQBjG78/IrFMn7aZ0cBBHPyal3XUrVFyUTjrURaRLFwdx6qKbo4ODFUSoolXxA9uitDUHDZqk+Whi8JekVHo8HG+O5/fe816Eu7SoplL21LRMJAzD6Ok6onAcxzQNXdellG9CxLoSQtgTM1a5jHqlUhAEvu97ngdjyy8K13Uty+pkcz8b6+whQHvcTnFfzedjoN/vy8Iunz2WFW712bnW/MIAiG8AcDe3aOk8Paq39+rqWieTbl9ct8/OiUdTGA5DwEgmnYNDWnKp5/9ySoEoED7GeJ1MUtDiFIBZAZzCDjcS5n2vaC6vYGUPTdmcpmkAaAB8jI0zLokxEcnrdjGROAydSTfqDYAHRQHgJAQ+FQUgzmDbtmmaONSTY8SDatEaAVRSRQPQj9cEIHTr+eW72cQqowVAEBIeieh3BNtFIpGEJwfgWbTRFQ/9Dwz/4l2tVr2pxrqsVIbCN9QfN7JX66mNmtwAAAAASUVORK5CYII="
    },
    {
      name: "Canada (Fr)",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABZ0lEQVR42lWRvUvDQBjG78/IrFMn7aZ0cBBHPyal3XUrVFyUTjrURaRLFwdx6qKbo4ODFUSoolXxA9uitDUHDZqk+Whi8JekVHo8HG+O5/fe816Eu7SoplL21LRMJAzD6Ok6onAcxzQNXdellG9CxLoSQtgTM1a5jHqlUhAEvu97ngdjyy8K13Uty+pkcz8b6+whQHvcTnFfzedjoN/vy8Iunz2WFW712bnW/MIAiG8AcDe3aOk8Paq39+rqWieTbl9ct8/OiUdTGA5DwEgmnYNDWnKp5/9ySoEoED7GeJ1MUtDiFIBZAZzCDjcS5n2vaC6vYGUPTdmcpmkAaAB8jI0zLokxEcnrdjGROAydSTfqDYAHRQHgJAQ+FQUgzmDbtmmaONSTY8SDatEaAVRSRQPQj9cEIHTr+eW72cQqowVAEBIeieh3BNtFIpGEJwfgWbTRFQ/9Dwz/4l2tVr2pxrqsVIbCN9QfN7JX66mNmtwAAAAASUVORK5CYII="
    },
    {
      name: "Danmark",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABFUlEQVR42nWRPU/DMBCG8w+6dqVM3cgGykpGPiYQiIGBMiGxwj/shsTKBkTUEYrUJs6HE1c89lG3DJxeRWf7fey7S9RGkfKSxFrb5Au12RS97citu6fnoPXa2uWSxDw8qtl9e3P7dX1VXVyi7OR0C3CA2LW2ByD5Pk67NFVJgso4zqdTdv4Aco0A3fkZx1ibw6MsPsAtwDwA4sY3DAOAuMPd6H2yz9IBdGld4T3W3kfnoyW0rutaa12WpV6tWH5mmQesHXzgNsaIu/GBu6qq0geJAyiJgVCDlAHjxpokoZKP8TgfjfjSzG8P5m6Gm/7wubvzBWd6b4JJ3KItIPOWvgUIU0L4RDy4AXZ+ZFEU6uWVZP6PfgBgLC8Z2uCiVwAAAABJRU5ErkJggg=="
    },
    {
      name: "Suomi",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAA90lEQVR42m2RPQrCQBSE43G8gWfwAB7ATvACVmKtnQewsrNVEDvBRlAUFfEHRBSUFBE2m8QkbnB2X3wGcfgIm2Rm83Zi3WzJWPkBsT854HJ90AJsdwcwGm8s+JKP6t0zoZIkfqnYKAzDp5GUyXK1SgPKUGkfQbm5U0q7oygidxAEvu9jMVnaOkBuCFbix+qRfE+PhIkxA+8NSo01U6xNC9UFgVsr1/oGftywEv8Df91sJfBEB1AZCsHQKIHdWIMn5hYCOEZCCH0GBFBJZMRD6xN7npTSdV2RURqgBtEJt8TlZDP4SBrgH6lHNPQnd7ybzWe4ZukMe2/PfI0FyyvabgAAAABJRU5ErkJggg=="
    },
    {
      name: "México",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABJUlEQVR42m2QvUvDUBRHg6P4t4jOHRxEcNFRUGcFBcVVBwURdHTRRdAOIggOgl0U3Cp0aSFkEBVTUGxpoEGDr/loXvE0V9IoeRwud/idd+97hjE3BMO7I9K4rus4DrXRbkDdrlcMI4tBaPvuKKUba627utfrV60DpZprG62lZak3ImxVDtevD2DxYjMMQ3JxHGNGUYTwMTML9uTUQOBiokKUHNs0rVpJdRQCUaG5MJ8j+L5P9L50fLo6QeN5nqRbhUKOMH2ywkpv768I+3s7NCoRnsfGgcV+BdleBCacXxbPbq+owHdJOkcgDTyAiyVNw0qpwKiBIGlof30HQfDZUUA6OwGh+G8l4GfYitpHqfTRQjJh9A+mZT0+vVChWqs+lMuEsvwArvkr0rRX6H0AAAAASUVORK5CYII="
    },
    {
      name: "Nederland",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAA7klEQVR42mP4wcBADHoJQyDOv8o2ZPQrJx+KUlKB6EdMAhR5hCE0ICQ8wqAkDH3Xt4cgqIaviko/Zs371zgBhIA2QEi4PUBLcvIhZgEZYA2fPv0Dg79///7+8/f379+/fv368uUfhERDFy9fZnj37h1Ewx8wgGgAkj8g4CsIfPny5dOnT0AGQgOyaiCAKP727RtcNRB8/vwZpEFMo7d05rX4pr1A5FV5yrV3I5A0zt0ER3KZSyEkUJyBwYSBgSU2c/Id/bplmOogiMNvAwQBBcEaGHviZu+D2ABEEBsgmjGNgGoAWgIl0RBQGkIiIQCOfSzbVgVcNQAAAABJRU5ErkJggg=="
    },
    {
      name: "Norge",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABOklEQVR42mWRPUvDUBSG76ijW2adurVzR+2oLiIqIiJWESpVXJQO4uyoo6u/IIP+AcEf0EUrgoZQktpg0WiS5gaf3KPx6/JwuDl533PvOVd5SnWUIg5TPbpylWVZx2SE6x8bIf+I9w+8Vgvp6YWvtR7s7Xa3d5JG06tvQLS82l1a9OZmITdQGzVZDIfnD1mm+eFOzzxN1cCrVsGtlP1SieT3Cf3NBW0MXOy/Wgz3kzUbAzoBKYY0TYdmxXEcRdG7WS9mRWHo+76iUa6OFJpnjrB1cgdrxzfC/FEbyIyMXebDKUBaFCY+v4X9wStRYJ+fQA/MhHsnSYIBXXHvx/EJaFuWY1lEMrY0nazXaREDh1L7tlwp1I5Ro/llYNhMGgNtYJApMRMoTgMKfRrkIYMgoCe315MXtb/iHz4AESQv/etWU50AAAAASUVORK5CYII="
    },
    {
      name: "Sverige",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAAw0lEQVR42mNgcG6Eo9+7GCCIQS0XBbHEQhGDCQNQXenq4xD0+0kxBEG4cbP3ISPX3o1gPWANEKE/d8IhCCgHR/p1yyAIpAFuA7KGn9ecMVUjNIAc/aQYbjZEAwR9u2gAQZ9OywPR17O+r2cyoGiAK8VUDURANooG/KoRGoChBvQDxMVwpXB3y2UuBSKBzFlABOSCPa2WCwkyTA1ARXDV6BrgoQTUAw9WSMggBxQDCxsDKC5gcQl0IgSBTYIhkCIYyWACAJq+AUf+6Io4AAAAAElFTkSuQmCC"
    },
    {
      name: "中国",
      flag: ""
    },
    {
      name: "대한민국",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABU0lEQVR42mWRzUrDQBSF+0yuhG7NxrdQFAoKXblwJRTRF3AjuOiiGxERlOLCnTYuhIol2CKiBdOgpjVqMpNMflr8kilWcDgMd+6cc++5M6WvUP7Hx7fQ8DzPGQ41Bo7zYj+VuJ4Uq/fwaLZaQohxsbIsS7NxEATnzdP2bTuO4zAMZwLXdXe3twAy2Kp7D5Ik4VhZWdV5BNavgDNZiikp1U4tNgxAgCuSaGgupew/92eWaEKcnhxr9mjBeC+X0by6gnJ4Q0AwFWjfmD6qX8GDXVm7XFq+uK7tKaUYDAF7LqBpzswyOpBvmm+LmzdQ59fvQOOsZw8+4fm+j6BjWbkgTVMiZmgc1oWYbOx356oKdvXAxg9JZmASvEwFlGcaBFyQ4jXMjgsoyYOS1EPrY4mvwToDkaIMxqIowjcyGHwWHcj7xco7/P1InlnvNMS3BiQKAx38AE1DsSNDguf/AAAAAElFTkSuQmCC"
    },
    {
      name: "繁體中文",
      flag:""
    },
    {
      name: "Türkiye",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAGYktHRAD/AP8A/6C9p5MAAAEuSURBVChTpVK9SgNBEP7mNmcul4h24kmSB7AUfAEbsbGx8TVsU2gEwTewsbfxScRCCAo2Eg0YIsglISZ3udtdd9djUS8kgh8sOzszOz/fDHX8NYl/wMluCykEZBRDpmmmmY8fAWQUQUQhvN0dsGDdvBeBHbmVEy3IeApWr6IadiGHQ1C5DHIY0vazcYTjgIi+5G+wHPBxDzXOMWicon/eVKUtG4el7S2I3hvEewip7L+D2BZ0FFJZxlfXYGwVVCoZ7UqzgaB9Dz7qzqzABtAmTaB/eADO+5CTidEOjs/wWt8EqyhOZH5gtgXDQW0DwVMLo4tLTO9aSNSJb25BrgsUCvM50DBTEB/w9/aRPDyCv3RAnpdZZyO3SLoNJImaDwOprIuQWyRNJBWLf/oMAJ+5mHSXRuZmqAAAAABJRU5ErkJggg=="
    }
  ];
  
  const FooterGrid = styled (Grid) ({
    backgroundColor: theme.palette.light.main,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: lg ? "300px" : "auto"
  });

  const MainGrid = styled (Grid) ({
    justifyContent: "space-between",
    height: "75%",
    margin: "auto",
    marginTop: lg ? "10px" : "20px",
    marginBottom: lg ? "10px" : "20px",
    paddingLeft: md ? "30px" : "20px",
    paddingRight: md ? "30px" : "20px",
    maxWidth: "1120px !important"
  });

  const ImgGrid = styled (Grid) ({
    JustifyContent: lg ? "center" : "left",
    height: lg ? "40%" : sm ? "20%" : "40%",
    minHeight: "55px",
    paddingLeft: lg ? "0px" : sm ? "20px" : "8px"
  });

  const LogoImg = styled ('img') ({
    width: lg ? "64px" : "47px", 
    height:  lg ? "64px" : "47px"
  });

  const CopyrightImg = styled ('img') ({
    width: "191px",
    height: "57px"
  });

  const MainLinkGrid = styled (Grid) ({
    height: lg ? "40%" : sm ? "20%" : "40%",
    paddingLeft : "8px",
    paddingTop: lg ?  "0px" : md ? "0.5em" :"0px" ,
    margin: lg ? "0px" : md ? "10px" : sm ? "10px" : "5px"
  });

  const MainLink = styled (Typography) ({
    fontSize: lg ? "18px" : "16px",
    marginRight: "20px",
    '&:hover': {
      cursor: 'pointer'
    }
  });

  const FormContainerGrid = styled (Grid) ({
    justifyContent: lg ? "space-around" : "flex-start",
    height: "40%",
    minHeight: lg ? "0px" : md ? "80px" : sm ? "150px" : "0px"
  });

  const PrivacyLinkGrid = styled (Grid) ({
    height: "60%",
    paddingTop: "16px",
    paddingBottom: "16px",
    paddingLeft: "8px",
    marginLeft: xl ? "88px" : lg ? "72px" : md ? "24px" : sm ? "10px" : "0px"
  });

  const PrivacyLink = styled (Typography) ({
    fontSize: "14px",
    marginRight: "15px", 
    wordWrap: "break-word",
    '&:hover': {
      cursor: 'pointer'
    }
  });

  const CopyrightImgGrid = styled (Grid) ({
    margin: md ? "0px" : "20px",
    height: lg ? "60%" : md ? "140px" : "auto",
    justifyContent: lg ? "flex-end" : "flex-start",
    alignItems: lg ? "flex-end" : md ? "center" : "flex-end"
  });

  const DropdownFormControl = styled (FormControl) ({
    margin : lg ? "8px" : "20px",
    minWidth: "120px",
    width: lg ? "120px" : md ? "40%" : sm ? "80%" : "80%",
    height: "70px"
  });

  const LanguageContainer = styled ('div') ({
    backgroundColor: "#f3f3f3",
    padding: lg ? "10px" : "auto",
    width: lg ? "537px" : "auto",
    height: lg ? "453px" : "auto",
    display: lg ? "flex" : "auto",
    flexDirection: lg ? "column" : "auto",
    flexWrap: lg ? "wrap" : "auto"
  });

  const LanguageItem = styled (MenuItem) ({
    width: lg ? "170px" : "auto",
    height: lg ? "47px" : "auto",
    transition: lg ? "padding 0.3s" : "padding 0.0s",
    '&:hover': {
      paddingLeft: lg ? "25px" : "auto"
    }
  });

  const LanguageTypography = styled (Typography) ({
    fontSize: "16px"
  });

  const [price, setPrice] = useState("Italy");
  const [language, setLanguage] = useState("Italia");

  const handlePrice = event => setPrice(event.target.value);
  const handleLanguage = event => setLanguage(event.target.value);


  return (
    <FooterGrid container>
      <MainGrid container xs={11} lg={8} xl={8}>
        <ImgGrid item container xs={12} lg={1}>
          <LogoImg item alt="logo" src="https://media.contentapi.ea.com/content/dam/eacom/it-it/common/october-ea-ring.png"/>
        </ImgGrid>
        <MainLinkGrid item container xs={12} lg={6}>
          {MAIN_LINKS.map((text) => (<MainLink item>{text}</MainLink>))}
        </MainLinkGrid>
        <FormContainerGrid item container xs={12} lg={5}>
          {/* Inizio parte dropdown da rivedere */}
          <DropdownFormControl variant="standard" sx={{border: "3px solid lightgray", width: {xs: "80vw", md: "40vw", lg: "190px"}, borderRadius: "4%"}}>
          <InputLabel sx={{width: {xs: "500px", lg: "170px"}, marginLeft: {xs: "10px", lg: "20px"}, marginTop: "7px", marginBottom: "5px"}} variant="standard"
            margin="dense" shrink><Typography sx={{fontSize: "20px", width: "180px", color: "gray !important"}}>Prezzi per regione</Typography></InputLabel>
            <Select
              value={price}
              onChange={handlePrice}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{border: "none", marginTop: "25px !important", marginRight: "10px", paddingLeft: {xs: "10px", lg: "20px"}}}
              IconComponent={KeyboardArrowDownIcon}
              disableUnderline
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: {
                        xs: '#f3f3f3'},
                    width: {
                      lg: "537px"
                    },
                    padding: {
                      xs: "auto",
                      lg: "10px"
                    },
                    height: {
                      xs: "auto",
                      lg: "510px"
                    },
                    '& .MuiMenuItem-root': {
                      marginRight: "0px",
                      width: {
                        xs: "auto",
                        lg: "160px !important"}
                    },
                    '& .MuiMenu-list': {
                      display :{
                        xs: "auto",
                        lg: "flex !important"
                      },
                      flexDirection: {
                        xs: "auto",
                        lg: "row !important"
                      },
                      flexWrap: {
                        xs: "auto",
                        lg: "wrap !important"
                      },
                    }
                  },
                },
              }}
            >
                
                {PRICES.map(item => <LanguageItem value={item}><LanguageTypography>{item}</LanguageTypography></LanguageItem>)}
              
            </Select>
          </DropdownFormControl>

          <DropdownFormControl variant="standard" sx={{border: "3px solid lightgray", width: {xs: "80vw", md: "40vw", lg: "190px"}, borderRadius: "5%"}}>
          <InputLabel sx={{width: {xs: "500px", lg: "170px"}, marginLeft: {xs: "10px", lg: "20px"}, marginTop: "7px", marginBottom: "5px"}} variant="standard"
            margin="dense" shrink><Typography sx={{fontSize: "20px", width: "180px", color: "gray !important"}}>Lingua</Typography></InputLabel>
            <Select
              value={language}
              onChange={handleLanguage}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{border: "none", marginTop: "25px !important", marginRight: "10px", paddingLeft: {xs: "10px", lg: "20px"}}}
              IconComponent={KeyboardArrowDownIcon}
              disableUnderline
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: {
                        xs: '#f3f3f3'},
                    width: {
                      lg: "537px"
                    },
                    padding: {
                      xs: "auto",
                      lg: "10px"
                    },
                    height: {
                      xs: "auto",
                      lg: "420px"
                    },
                    '& .MuiMenuItem-root': {
                      marginRight: "0px",
                      width: {
                        xs: "auto",
                        lg: "160px !important"}
                    },
                    '& .MuiMenu-list': {
                      display :{
                        xs: "auto",
                        lg: "flex !important"
                      },
                      flexDirection: {
                        xs: "auto",
                        lg: "row !important"
                      },
                      flexWrap: {
                        xs: "auto",
                        lg: "wrap !important"
                      },
                    }
                  },
                },
              }}
            >
              {LANGUAGES.map(item => <LanguageItem value={item.name}><LanguageTypography>{item.name} <img style={{marginLeft: lg ? "5px" : "10px"}} src={item.flag}/></LanguageTypography></LanguageItem>)}
              
            </Select>
          </DropdownFormControl>
        </FormContainerGrid>
        {/* Fine parte dropdown da rivedere */}
        <PrivacyLinkGrid item container xs={12} md={7} xl={5}>
          {TC_LINKS.map((text) => (<PrivacyLink item>{text}</PrivacyLink>))}
        </PrivacyLinkGrid>
        <CopyrightImgGrid item container xs={12} md={3}>
          <CopyrightImg alt="diritti" src="https://privacy-policy.truste.com/privacy-seal/seal?rid=2593a571-b03b-4951-9a22-c175bd66b351"/>
        </CopyrightImgGrid>
      </MainGrid>
    </FooterGrid>
  );
};

export default Footer;
