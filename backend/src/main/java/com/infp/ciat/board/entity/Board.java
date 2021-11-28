package com.infp.ciat.board.entity;

import com.infp.ciat.common.BaseTimeEntity;
import com.infp.ciat.user.entity.Account;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Entity
public class Board extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String content;

    @ElementCollection
    @CollectionTable(name = "picture_list")
    private List<String> pictureList = new ArrayList<>();

    @Column(nullable = false)
    private String showYn = "Y";

    @ManyToOne
    @JoinColumn(name = "accountId")
    private Account account;

    @OneToMany(mappedBy = "board", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
    private List<BoardReply> replies;

    @Builder
    public Board(String content, List<String> pictureList, String showYn, Account account) {
        this.content = content;
        this.pictureList = pictureList;
        this.showYn = showYn;
        this.account = account;
    }

}
